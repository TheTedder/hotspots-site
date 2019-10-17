# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
john = User.create(name: "John", email: "notMyDog@hotmail.com", password: "123456")

Location.create(name: "cafe", address: "12 back st", city: "Boston", state: "MA", price: 10, password_protected: true, zip: "01222", user: john)

Location.create(name: "Nero", address: "12 back st", city: "Cambridge", state: "MA", price: 10, password_protected: false, zip: "01222", user: john)

Location.create(name: "Roche bros", address: "12 back st", city: "Boston", state: "MA", price: 10, password_protected: false, zip: "01222", user: john)

Location.create(name: "BPL", address: "12 back st", city: "Boston", state: "MA", password_protected: false, zip: "01222", user: john)
