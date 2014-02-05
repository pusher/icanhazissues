# encoding: utf-8
require 'airbrake'
require 'rest-client'


Airbrake.configure do |config|
  config.api_key = '19f6adfd17663c1c5f283ea11a5e4f25'
end

class PusherEvent
  def initialize(event, params={})
    RestClient.post('dradis-prod.herokuapp.com/events', {event: { name: event, params: params }})
  end
end

class App < Sinatra::Base
  use Airbrake::Rack
  enable :raise_errors
  enable :sessions
  set :public_folder, File.join(File.dirname(__FILE__), 'public')

  set :github_options, GITHUB_CREDS

  register Sinatra::Auth::Github

  helpers do

    def get_comments(issue, opts={})
      response = github_raw_request(:get, "repos/#{OWNER}/#{REPO}/issues/#{issue['number']}/comments", nil, opts.merge({ :per_page => 100 }))
    end

    def fetch_issues(opts={})
      response = github_raw_request(:get, "repos/#{OWNER}/#{REPO}/issues", nil, opts.merge({ :per_page => 100 }))
      pag(response)
    end
    
    def pag(response)
      new_issues = MultiJson.load(response)
      if new_issues.length == 100 && response.headers[:link] =~ /^.*\<([^>]+)\>; rel="next",.*$/
        next_link = response.headers[:link].gsub(/^.*\<([^>]+)\>; rel="next",.*$/, "\\1")
        new_issues + pag(RestClient.get(next_link))
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
      github_raw_request(:post, path, MultiJson.dump(labels))
    end

    def github_raw_request(verb, path, body = nil, params={})
      url = "https://api.github.com/#{path}"
      params = {:access_token => github_user.token}.merge(params)
      case verb
      when :get, :delete, :head
        RestClient.send(verb, url, :params => params, :accept => :json)
      else
        RestClient.send(verb, url, body, :params => params, :accept => :json)
      end
    end

    def github_request(verb, path, params={})
      MultiJson.load(github_raw_request(verb, path, nil, params))
    end
  end

  get '/' do
    authenticate!
    redirect '/board#/backlog'
  end

  get '/ptk' do
    authenticate!
    @issues = fetch_issues({ labels: 'priority' })
    @existing = ['ready', 'development', 'review', 'release'].collect {|a| fetch_issues({ labels: a }) }.flatten!
    # @issues.collect{|i| i['comments'] = MultiJson.load( get_comments(i) )}
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
        github_raw_request(:post, "repos/#{OWNER}/#{REPO}/issues/#{issue['number']}/comments", MultiJson.dump(comment))
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
    @issues.collect{|i| i['comments'] = MultiJson.load( get_comments(i) )}
    erb :done
  end

  get '/issues.js' do
    issues = fetch_issues
    content_type "application/javascript"
    return "var issues = #{MultiJson.dump(issues)}"
  end
  
  get '/milestones.js' do
    milestones = github_request(:get, "repos/#{OWNER}/#{REPO}/milestones")
    content_type "application/javascript"
    return "var milestones = #{MultiJson.dump(milestones)}"
  end

  get '/board' do
    authenticate!
    erb :board
  end
  
  get '/labels.js' do
    labels = github_request(:get, "repos/#{OWNER}/#{REPO}/labels", { :per_page => 100 })
    content_type "application/javascript"
    return "var labels = #{MultiJson.dump(labels)}"
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
    return github_raw_request(:post, path, MultiJson.dump(params['issue']) )
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
      github_raw_request(:post, "repos/#{OWNER}/#{REPO}/issues/#{params['num']}/comments", MultiJson.dump(comment))
    end
    PusherEvent.new('change_issue', { issue_number: params['num'], old_state: original_state, new_state: params['label'] })
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
    return github_raw_request(:post, "repos/#{OWNER}/#{REPO}/labels", MultiJson.dump(params['label']))
  end

  get '/logout' do
    logout!
    redirect 'https://github.com'
  end
end