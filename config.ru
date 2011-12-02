$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'rubygems'
require 'sinatra'
require 'sinatra_auth_github'

class App < Sinatra::Base
  enable :sessions
  set :public, File.join(File.dirname(__FILE__), 'public')

  set :github_options, {
                          :secret    => '1bbeb9a0e978fc9596b0cafff75295d7908e5122',
                          :client_id => 'fe06d7535dae3eda2aaf',
                          :scopes => ['repo']
                       }

  register Sinatra::Auth::Github

  # helpers do
  #   def repos
  #     github_request("user/repos")
  #   end
  # end

  get '/' do
    authenticate!
    "Hello There, <a href=\"/kanban/index.html\">Kan Ban</a>"
  end
  
  get '/issues.json' do
    authenticate!
    return 'var issues = ' + github_request('repos/pusher/pusher-server/issues').to_json
  end

  # get '/orgs/:id' do
  #   github_public_organization_authenticate!(params['id'])
  #   "Hello There, #{github_user.name}! You have access to the #{params['id']} organization."
  # end

  # the scopes above need to include repo for team access :(
  # get '/teams/:id' do
  #   github_team_authenticate!(params['id'])
  #   "Hello There, #{github_user.name}! You have access to the #{params['id']} team."
  # end

  get '/logout' do
    logout!
    redirect 'https://github.com'
  end
end

run App