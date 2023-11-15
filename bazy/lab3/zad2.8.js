use('zadania');
db.restaurants.find(
  {"grades.score": { $mod: [ 7, 0 ] }},
  { "grades.grade": 1, "grades.score": 1, name: 1, restaurant_id: 1 , _id: 0}
  )
  .sort({ restaurant_id: 1 })
  .limit(5);