require 'rails_helper'

feature 'user submits a review', %Q{
  As a signed in user
  I want to submit a review for a location
  so that others can view my review
} do
  scenario 'submits a correct review' do
    user = FactoryBot.create(:user)
    location = FactoryBot.create(:location, user: user)

    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'

    visit("/locations/1")
    save_and_open_page
    fill_in("Description:", with: "RANDOM")
    select("3", from: "Rating")
    fill_in("speed_data", with: "5")
    click("Submit")

    expect(page).to have_content("RANDOM")
    expect(page).to have_content("Speed: 5 kb/s")
  end
end
