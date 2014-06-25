# encoding: utf-8
require 'json'
require 'omniauth-github'
require 'sinatra/base'
require 'forwardable'
require 'excon'
require 'restclient'

class PusherEvent
  def initialize(event, params={})
    RestClient.post('eventinator.io/events',
                    event: { name: event, params: params },
                    api_key: EVENTINATOR_KEY,
                    )
  end
end

GithubUser = Struct.new(:id, :login, :token)
def GithubUser.from_auth(data)
  # require 'pp'; pp data
  new(data["uid"], data["info"]["nickname"], data["credentials"]["token"])
end

# Embeds the response object into an object. This allows to turn the response
# around and have the body as the primary value.
module ExconResponse
  extend Forwardable
  attr_reader :response
  def_delegators :response, :headers

  def self.wrap(obj, response)
    obj.instance_variable_set(:@response, response)
    obj.extend ExconResponse
    obj
  end
end

class App < Sinatra::Base
  enable :raise_errors
  enable :sessions
  set :public_folder, File.expand_path('../public', __FILE__)

  set :protection, except: [:frame_options]

  use OmniAuth::Builder do
    provider :github, GITHUB_KEY, GITHUB_SECRET, scope: "repo"
  end

  helpers do

    def get_comments(issue, opts={})
      github_raw_request(:get, "repos/#{OWNER}/#{REPO}/issues/#{issue['number']}/comments", nil, opts.merge({ :per_page => 100 }))
    end

    def fetch_issues(opts={})
      response = github_raw_request(:get, "repos/#{OWNER}/#{REPO}/issues", nil, opts.merge({ :per_page => 100 }))
      pag(response)
    end

    def pag(response)
      new_issues = response
      puts "Size: #{response.size}, type #{new_issues.class}, Link header: #{response.headers['Link']}"
      if response.headers["Link"] =~ /<https:\/\/api\.github\.com([^>]+)>;\s*rel="next"/
        next_link = $1
        puts "Following next link: #{next_link}"
        new_issues + pag(github_raw_request(:get, next_link))
      else
        new_issues
      end
    end

    def remove_old_labels(issue)
      old_labels = []
      issue['labels'].each do |label|
        if App::COLUMNS.include?(label['name']) 
          old_labels << label
          path = "repos/#{OWNER}/#{REPO}/issues/#{issue['number']}/labels/#{label['name']}"
          github_raw_request(:delete, path, nil)
        end
      end
      old_labels
    end

    def add_label(issue_num, label)
      add_labels(issue_num, [label])
    end

    def add_labels(issue_num, labels)
      path = "repos/#{OWNER}/#{REPO}/issues/#{issue_num}/labels"
      github_raw_request(:post, path, labels)
    end

    def github_raw_request(verb, path, body = nil, params={})
      # Keep a client per client request
      @client ||= Excon.new('https://api.github.com', persistent: true)

      headers = {
        'Authorization' => "token #{github_user.token}",
        'Accept' => "application/json",
      }
      case verb
      when :get, :delete, :head
        resp = @client.request(method: verb.to_s.upcase, path: path, query: params, headers: headers)
      else
        resp = @client.request(method: verb.to_s.upcase, path: path, body: JSON.dump(body), headers: headers)
      end
      ExconResponse.wrap(JSON.load(resp.body), resp)
    end

    def github_request(verb, path, params={})
      github_raw_request(verb, path, nil, params)
    end

    def github_user; session[:user]; end

    def authenticate!
      redirect to("/auth/github") unless github_user
    end

    def logout!
      session.clear
      redirect to ("/")
    end
  end

  get '/auth/:name/callback' do
    auth = request.env["omniauth.auth"]
    session[:user] = GithubUser.from_auth(auth)
    redirect '/'
  end

  get '/' do
    authenticate!
    redirect '/board#/kanban'
  end

  get '/ptk' do
    authenticate!
    @issues = fetch_issues({ labels: 'priority' })
    @existing = ['ready', 'development', 'review', 'release'].collect {|a| fetch_issues({ labels: a }) }.flatten!
    # @issues.collect{|i| i['comments'] = JSON.load( get_comments(i) )}
    erb :ptk
  end

  post '/ptk_submission' do
    authenticate!
    @issues = fetch_issues({ labels: 'priority' })
    @accepted = []
    @denied = []
    params[:issues].each_pair do |k, v|
      issue = @issues.detect{|i| i['id'] == k.to_i }
      issue['reason'] = v['comment']
      remove_old_labels(issue)
      if !v['comment'].blank?
        comment = { :body =>  v['comment'] }
        github_raw_request(:post, "repos/#{OWNER}/#{REPO}/issues/#{issue['number']}/comments", comment)
      end
      if v[:accepted] == '1'
        add_labels(issue['number'], ["ready", "p-#{Time.now.strftime('%Y-%m-%d')}"])
        @accepted << issue
      else
        @denied << issue
      end
    end
    PusherEvent.new('ptk', {
      accepted: @accepted.collect{|i| { number: i['number'], reason: i['reason'] } },
      denied: @denied.collect{|i| { number: i['number'], reason: i['reason'] } }
    })
    erb :ptk_report
  end

  get '/done' do
    authenticate!
    @issues = fetch_issues({ labels: 'done' })
    @issues.collect{|i| i['comments'] = get_comments(i)}
    erb :done
  end

  get '/issues.js' do
    issues = fetch_issues
    content_type "application/javascript"
    return "var issues = #{JSON.dump(issues)}"
  end
  
  get '/milestones.js' do
    milestones = github_request(:get, "repos/#{OWNER}/#{REPO}/milestones")
    content_type "application/javascript"
    return "var milestones = #{JSON.dump(milestones)}"
  end

  get '/board' do
    authenticate!
    erb :board
  end
  
  get '/labels.js' do
    labels = github_request(:get, "repos/#{OWNER}/#{REPO}/labels", { :per_page => 100 })
    content_type "application/javascript"
    return "var labels = #{JSON.dump(labels)}"
  end

  get '/done.txt' do
    authenticate!
    @issues = github_request(:get, "repos/#{OWNER}/#{REPO}/issues", {
      :state => "open",
      :labels => "done"
    })

    report = "[iteration-end] #{@issues.size} stories done\n\n"

    beneficiary_stats = Hash.new { |h,k| h[k] = 0 }
    ptk_count = 0
    adhoc_count = 0

    @issues.map do |issue|
      # Extract labels into [String]
      labels = issue["labels"].map { |l| l["name"] }.sort - ["done"]
      [issue, labels]
    end.group_by do |issue, labels, milestone|
      # Group by milestone name, or operations
      if (ms = issue["milestone"])
        [ms["title"], ms]
      elsif labels.include?('ops')
        ['Operations', nil]
      else
        ['Engineering', nil]
      end
    end.sort_by do |(milestone_title, milestone), _|
      # Show oldest milestones first
      milestone ? milestone["created_at"] : "0#{milestone_title}"
    end.each do |(milestone_title, milestone), issue_labels|
      heading = "SWIMLANE: #{milestone_title} (#{issue_labels.size})"
      report << "<h3>#{heading}</h3>"

      issue_labels.each do |issue, labels|
        from_ptk = labels.find { |l| l.start_with?('p-', 'ptk-') }
        ptk_count += 1 if from_ptk
        url = "https://github.com/pusher/pusher-server/issues/#{issue['number']}"

        beneficiaries = labels.select { |l| %w{engineering customer internal}.include?(l) }
        beneficiaries.each { |b| beneficiary_stats[b] += 1 }

        adhoc = labels.include?("adhoc")
        adhoc_count += 1 if adhoc

        report << "<a href='#{url}'>#{issue["number"]}</a>: " \
          "#{issue["title"]}\n"

        why = []
        why << "<b>ADHOC</b>" if adhoc
        why << "PTK: #{from_ptk}" if from_ptk
        why << "Beneficiary: #{beneficiaries.join(', ')}" if beneficiaries.any?
        report << "#{why.join(' | ')}\n" if why.any?

        # report << "⬠ #{labels.join(' ⬠ ')}\n"
        report << "★ #{issue['assignee']['login']} ★\n" if issue['assignee']
        report << "\n"
      end
    end

    report << "<h3>Stats</h3>"
    report << "Beneficiaries: #{beneficiary_stats}\n"
    report << "Number of PTK'ed stories done: #{ptk_count}\n"
    report << "Number of adhoc stories: #{adhoc_count}\n"

    return '<pre>' + report + '</pre>'
  end

  post '/issues' do
    authenticate!
    puts params['issue']
    path = "repos/#{OWNER}/#{REPO}/issues"
    return github_raw_request(:post, path, params['issue'])
  end

  post '/set_phase/:num' do
    authenticate!
    issue = github_request(:get, "repos/#{OWNER}/#{REPO}/issues/#{params['num']}")
    old_labels = remove_old_labels(issue)
    if params['label'] != ""
      add_label(params['num'], params['label'])
    end
    unless params['label'] == "" || params['label'] == 'priority' || (params['label'] == 'ready' && (old_labels & %w(development done review release)).empty?)
      original_state = old_labels.empty? ? 'backlog' : old_labels.collect{|c| c['name']}.join(', ')
      comment = { :body => "#{github_user.login} changed state: #{original_state} -> #{params['label']}" }
      github_raw_request(:post, "repos/#{OWNER}/#{REPO}/issues/#{params['num']}/comments", comment)
    end
    PusherEvent.new('change_issue', { 
      issue: {
        num: params['num'],
        title: issue['title'],
        old_state: original_state, 
        new_state: params['label']
      },
      user: github_user.login 
    })
    return 'success'
  end

  post '/add_label/:num' do
    authenticate!
    add_label(params['num'], params['label'])
    return 'success'
  end

  post '/labels' do
    authenticate!
    params['label']['color'].gsub!(/^#/, '')
    return github_raw_request(:post, "repos/#{OWNER}/#{REPO}/labels", params['label'])
  end

  get '/logout' do
    logout!
  end
end
