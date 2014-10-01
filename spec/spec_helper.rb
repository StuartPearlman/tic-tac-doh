require 'rubygems'
require 'rack/test'
require "rspec"
require "capybara"
require "capybara/dsl"
require "capybara/rspec"

ENV['RACK_ENV'] ||= 'test'

require File.expand_path("../../config/environment", __FILE__)

Capybara.app               = Sinatra::Application
Capybara.javascript_driver = :selenium
Capybara.default_wait_time = 10

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

RSpec.configure do |config|
  config.mock_with :rspec
  config.include Capybara::DSL
end

module SinatraHelper
  def app
    Rack::Builder.parse_file('config.ru').first
  end
end

module FakeSessionHelper
  def session
    @session ||= {}
  end

  %w(get post put patch delete head).each do |request_method|
    module_eval <<-EOM
    def #{request_method}(path, params={}, env={}, &block)
      super(path, params, { 'rack.session' => session }.merge(env), &block)
      @session = last_request.env['rack.session']
    end
    EOM
  end
end

RSpec.configure do |config|
  config.include Rack::Test::Methods
  config.include SinatraHelper
  config.include FakeSessionHelper
  config.include Capybara::DSL
  config.mock_with :rspec
end
