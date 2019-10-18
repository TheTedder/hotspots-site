# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: 'Batman', email: 'dark_knight@gothamcity.gov', password: '123456', password_confirmation: '123456')
joker = User.create(name: 'Joker', email: 'HAHAHAHAHA@aol.com', password: 'batman_sux', password_confirmation: 'batman_sux')

batcave = Location.create(name: 'Batcave', address: '22 Wayne Lane', city: 'Gotham', state: 'NY', zip: '34595', user: user, password_protected: true)
cityhall = Location.create(name: 'City Hall', address: '12 Main Street', city: 'Center City', state: 'LA', zip: '90210', user: user, price: 345)

Review.create(user: joker, location: batcave, rating: 2)
Review.create(user: user, location: batcave, rating: 5, body: 'Robin! I forgot the wifi password!')