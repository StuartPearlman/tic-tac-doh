require_relative 'spec_helper'

describe "the homepage", js: true, :type => :feature do

	it "renders x and o" do
		visit '/'
		page.find_by_id("4").click()
		expect(page).to have_content "X" and "O"
	end

	describe "the AI", js: true, :type => :feature do

		it "never loses" do
			visit '/'
			1000.times do
				page.find_by_id(rand(9) + 1).click()
				expect(page).to_not have_content "Player Wins!"
			end
		end
	end
end