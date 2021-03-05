puts 'Creating teachers...'

Teacher.create!({
  name: "Sy Rashid",
  campus: "Istanbul"
})
Teacher.create!({
  name: "Nico",
  campus: "Barcelona"
})
Teacher.create!({
  name: "Yair",
  campus: "Munich"
})

puts "Finished seeding #{Teacher.count} teachers!"
