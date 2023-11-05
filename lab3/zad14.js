use("zadania")
db.restaurants
.find({cuisine: {$ne: "American "},
  "borough": {$ne: "Brooklyn"},
  "grades.grade": "A"},
   {_id:0, "grades.date":0})
   .sort({cuisine: -1, restaurant_id: 1})
   .limit(5) 
