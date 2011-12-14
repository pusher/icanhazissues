$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'rubygems'
require 'sinatra'
require 'sinatra_auth_github'
require 'multi_json'

class App < Sinatra::Base
  enable :sessions
  set :public, File.join(File.dirname(__FILE__), 'public')

  set :github_options, {
                          :secret    => '1bbeb9a0e978fc9596b0cafff75295d7908e5122',
                          :client_id => 'fe06d7535dae3eda2aaf',
                          :scopes => ['repo']
                       }

  register Sinatra::Auth::Github

  helpers do
    def repos
      github_request(:get, "user/repos")
    end
    
    def remove_old_labels(issue)
      issue['labels'].each do |label|
        if App::COLUMNS.include?(label['name']) 
          path = "repos/#{OWNER}/#{REPO}/issues/#{issue['number']}/labels/#{label['name']}"
          github_raw_request(:delete, path, nil)
        end
      end
    end
    
    def add_label(issue, label)
      path = "repos/#{OWNER}/#{REPO}/issues/#{issue['number']}/labels"
      github_raw_request(:post, path, [label].to_json)
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
      JSON.parse(github_raw_request(verb, path, nil, params))
    end
  end
  
  COLUMNS = [
    'ready',
    'development',
    'done',
    'review',
    'release',
    'done'
  ]
  
  OWNER = 'pusher'
  REPO = 'pusher-server'

  get '/' do
    authenticate!
    "Hello There, <a href=\"/kanban/index.html\">Kan Ban</a>"
  end
  
  get '/issues.json' do
    authenticate!
    return 'var issues = ' + github_request(:get, "repos/#{OWNER}/#{REPO}/issues", { :per_page => 100 }).to_json
  end
  
  post '/set_phase/:num' do
    authenticate!
    puts "repos/#{OWNER}/#{REPO}/issues/#{params['num']}"
    issue = github_request(:get, "repos/#{OWNER}/#{REPO}/issues/#{params['num']}")
    remove_old_labels(issue)
    add_label(issue, params['label'])
    return 'success'
  end

  get '/logout' do
    logout!
    redirect 'https://github.com'
  end
end

run App