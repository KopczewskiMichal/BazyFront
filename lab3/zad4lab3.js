use("persons")
db.persons.find({id: {$lt: 11}})

db.persons.deleteMany({gender: "Male"}) 

use("persons")
db.persons.updateMany({gender: "Female"}, {$set:{gender: "Kobieta"}})


use("persons")
const friend1 = db.persons.findOne({first_name: "Dorene", last_name: "Cumber"})
const friend2 = db.persons.findOne({first_name: "Alaine", last_name: "Stollenwerck"})

db.persons.updateMany({first_name: "Devinne", last_name: "Gatchell"}, {$set:{friends: [friend1, friend2]}})

use("persons")
db.persons.findOne({first_name: "Devinne", last_name: "Gatchell"})