$LOAD_PATH.unshift(File.dirname(__FILE__))
require 'faraday'
require 'excon'
Faraday.default_adapter = :excon

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
