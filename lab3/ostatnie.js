use("zadania")
db.restaurants
.find({name:/mon/},
   { "address.coord":1, borough:1, name:1, _id: 0})
   .sort({restaurant_id: 1})
   .limit(5) 
