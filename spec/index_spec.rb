require_relative 'spec_helper'

describe "the homepage", js: true, :type => :feature do

	it "renders x and o" do
		visit '/'
		page.find_by_id("start").click()
		page.find_by_id("4").click()
		expect(page).to have_content  "X" and "O"
	end

	describe "the AI", js: true, :type => :feature do

		it "can lose on easy" do
			visit '/'
			1500.times do
				page.find_by_id("easy").click()
				page.find_by_id("start").click()
				page.find_by_id(5).click()
				page.find_by_id(rand(9) + 1).click()
			end
			expect(page).to have_content "Player Wins!"
		end

		it "can lose on medium" do
			visit '/'
			1500.times do
				page.find_by_id("medium").click()
				page.find_by_id("start").click()
				page.find_by_id(5).click()
				page.find_by_id(rand(9) + 1).click()
			end
			expect(page).to have_content "Player Wins!"
		end

		it "never loses on hard" do
			visit '/'
			10000.times do
				page.find_by_id("hard").click()
				page.find_by_id("start").click()
				page.find_by_id(rand(9) + 1).click()
				expect(page).to_not have_content "Player Wins!"
			end
		end
	end
end
