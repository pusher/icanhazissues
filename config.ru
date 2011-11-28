$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'rubygems'
require 'sinatra'
require 'config'

set :public, File.join(File.dirname(__FILE__), 'public')
# enable :sessions

get '/issues.json' do
  return 'var issues = ' + `curl -u "#{USERNAME}:#{PASSWORD}" https://api.github.com/repos/pusher/pusher-server/issues`
end

run Sinatra::Application
