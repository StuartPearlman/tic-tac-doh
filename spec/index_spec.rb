require_relative 'spec_helper'

describe "the homepage", js: true, :type => :feature do

	it "renders x and o" do
		visit '/'
		page.find_by_id("square-four").click()
		expect(page).to have_content "X" and "O"
	end
end

describe "the AI", js: true, :type => :feature do
	squares = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

	it "can lose on easy" do
		visit '/'
		1500.times do
			page.find_by_id("square-five").click()
			page.find_by_id("square-#{squares.sample}").click()
		end
		expect(page).to have_content "Player Wins!"
	end

	it "can lose on medium" do
		visit '/'
		1500.times do
			page.find_by_id("medium").click()
			page.find_by_id("square-five").click()
			page.find_by_id("square-#{squares.sample}").click()
		end
		expect(page).to have_content "Player Wins!"
	end

	it "never loses on hard" do
		visit '/'
		10000.times do
			page.find_by_id("hard").click()
			page.find_by_id("square-five").click()
			page.find_by_id("square-#{squares.sample}").click()
		end
		expect(page).to_not have_content "Player Wins!"
	end
end
