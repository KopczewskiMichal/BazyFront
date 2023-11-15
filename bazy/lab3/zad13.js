use("zadania")
db.restaurants
.find({cuisine: {$ne: "American "},
  "address.coord.0": { $lt: -65.754168},
  "grades.score": {$gt: 70}},
   {_id:0, "grades.date":0})
.sort({restaurant_id: 1})
.limit(5)
