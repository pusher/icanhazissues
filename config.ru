$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'faraday'
require 'excon'
Faraday.default_adapter = :excon

# Config
COLUMNS = [
  'ready',
  'development',
  'review',
  'release',
  'done',
  'priority'
]

OWNER = ENV['GITHUB_ORG'] || 'pusher'
REPO = ENV['GITHUB_REPO'] || 'icanhazissues'

GITHUB_KEY = ENV['GITHUB_KEY']
GITHUB_SECRET = ENV['GITHUB_SECRET']
EVENTINATOR_KEY = ENV['EVENTINATOR_KEY']

require './server.rb'

run App
