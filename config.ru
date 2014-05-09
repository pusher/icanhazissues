$LOAD_PATH.unshift(File.dirname(__FILE__))
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
