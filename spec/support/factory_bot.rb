require 'factory_bot'

FactoryBot.define do
  factory :user do
    name { 'Jonathan' }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
