require 'rake'
require ::File.expand_path('../config/environment', __FILE__)

# Command line support
desc 'Start IRB with application environment loaded'
task "console" do
  exec "irb -r./config/environment"
end

# RSpec commands
begin
  require 'rspec/core'
  require 'rspec/core/rake_task'

  RSpec::Core::RakeTask.new(:spec)
  task :default => :spec
rescue LoadError
  task :default do
    puts "There's no default task"
  end
end

# Jasimine commands
require 'jasmine'
load 'jasmine/tasks/jasmine.rake'

# Keep dyno running
desc "Pings PING_URL to keep a dyno alive"
task :dyno_ping do
  require "net/http"

  if ENV['PING_URL']
    uri = URI(ENV['PING_URL'])
    Net::HTTP.get_response(uri)
  end
end
