use("zadania")
db.restaurants.find({},{_id:0, "grades.date":0}).sort({restaurant_id: 1}).limit(1)