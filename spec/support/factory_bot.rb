require 'factory_bot'
require 'faker'

FactoryBot.define do
  factory :user do
    name { Faker::Name.first_name }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :location do
    user
    name { Faker::Games::SuperSmashBros.stage }
    address { Faker::Address.street_address }
    city { Faker::Address.city }
    zip_state = Faker::Address.state_abbr
    state { zip_state }
    zip { Faker::Address.zip_code(state_abbreviation: zip_state) }
  end

  factory :review do
    user
    location
    rating { 1..5.to_a.sample }
    body { Faker::Lorem.paragraph } if [true,false].sample
    speed_data { Random.rand(5000) } if [true,false].sample
  end
end
