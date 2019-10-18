require 'factory_bot'
require 'faker'

FactoryBot.define do
  factory :user do
    name { Faker::Name.first_name }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
