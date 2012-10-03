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

require './server.rb'

run App