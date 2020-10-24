# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
MenuItem.destroy_all

users = []
menu_items = []
item_types = ['Appetizer','Entree','Side','Dessert','Special']

10.times do
    User.create do |u|
        u.name = Faker::GreekPhilosophers.name
        u.email = Faker::Internet.unique.email
        u.password = Faker::Internet.password
        users << u
    end
end
30.times do
    MenuItem.create do |m|
        m.title = Faker::Lorem.sentence
        m.category = item_types.sample
        m.description = Faker::Lorem.paragraph
        m.user = users.sample
    end
end

tester = User.create(name: "Test", email: "test@test.com",  password: "test")
test_item1 = MenuItem.create(title: "Test Menu", category: item_types.sample,description: " test test test test test test test", user: tester)