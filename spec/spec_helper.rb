require 'rubygems'
require 'rack/test'
require 'nokogiri'
require "rspec"
require "capybara"
require "capybara/dsl"
require "capybara/rspec"

# All our specs should require 'spec_helper' (this file)

# If RACK_ENV isn't set, set it to 'test'.  Sinatra defaults to development,
# so we have to override that unless we want to set RACK_ENV=test from the
# command line when we run rake spec.  That's tedious, so do it here.
ENV['RACK_ENV'] ||= 'test'

require File.expand_path("../../config/environment", __FILE__)

# require_relative "./../server"

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

module NokogiriHelper
  def parsed_body
    Nokogiri::HTML(last_response.body)
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
  config.include NokogiriHelper
  config.include FakeSessionHelper
  config.include Capybara::DSL
  config.mock_with :rspec
  config.after do
    if example.metadata[:type] == :feature and example.exception.present?
      save_and_open_page
    end
  end
end
