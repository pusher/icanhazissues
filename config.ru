$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'rubygems'
require 'sinatra'
require 'sinatra_auth_github'
require 'multi_json'
require 'github_creds'

COLUMNS = [
  'ready',
  'development',
  'review',
  'release',
  'done',
  'priority'
]

OWNER = 'pusher'
REPO = 'pusher-server'

class App < Sinatra::Base
  enable :sessions
  set :public_folder, File.join(File.dirname(__FILE__), 'public')

  set :github_options, GITHUB_CREDS

  register Sinatra::Auth::Github

  helpers do

    def fetch_issues
      response = github_raw_request(:get, "repos/#{OWNER}/#{REPO}/issues", nil, { :per_page => 100 })
      pag(response)
    end
    
    def pag(response)
      new_issues = MultiJson.load(response)
      if new_issues.length == 100
        next_link = response.headers[:link].gsub(/^\<([^>]+)\>.*$/, "\\1")
        new_issues + pag(RestClient.get(next_link))
      else
        new_issues
      end
    end
    
    def remove_old_labels(issue)
      issue['labels'].each do |label|
        if App::COLUMNS.include?(label['name']) 
          path = "repos/#{OWNER}/#{REPO}/issues/#{issue['number']}/labels/#{label['name']}"
          github_raw_request(:delete, path, nil)
        end
      end
    end

    def add_label(issue_num, label)
      path = "repos/#{OWNER}/#{REPO}/issues/#{issue_num}/labels"
      github_raw_request(:post, path, MultiJson.dump([label]))
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
    "Hello There, <a href=\"/kanban/index.html\">Kan Ban</a>"
  end

  get '/issues.js' do
    authenticate!
    issues = fetch_issues
    content_type "application/javascript"
    return "var issues = #{MultiJson.dump(issues)}"
  end
  
  get '/labels.js' do
    authenticate!
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

    report = ""

    @issues.map do |issue|
      labels = issue["labels"].map { |l| l["name"] }.sort - ["done"]
      [issue, labels]
    end.sort_by do |issue, labels|
      # Sort by tags then number - fairly crude ordering but better than nada
      [labels, issue["number"]]
    end.each do |issue, labels|
      report << "#{issue["number"]}: #{issue["title"]}\n"
      report << "⬠ #{labels.join(' ⬠ ')}\n"
      report << "https://github.com/pusher/pusher-server/issues/#{issue['number']}\n"
      report << "★ #{issue['assignee']['login']} ★\n" if issue['assignee']
      report << "\n"
    end

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
    remove_old_labels(issue)
    if params['label'] != ""
      add_label(params['num'], params['label'])
    end
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

run App