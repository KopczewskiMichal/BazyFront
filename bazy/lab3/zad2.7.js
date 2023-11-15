use('zadania');
db.restaurants.find(
  { "grades.1": {date: ISODate("2014-08-11T00:00:00Z"), grade: "A", score: 9}},
  {  "grades.grade": 1, "grades.score": 1, name: 1, restaurant_id: 1, "_id": 0})
  .sort({ restaurant_id: 1 })
  .limit(5);
  
  
  // Kolejność w słowniku po grades.1 jest ważna, musi być taka sama jak w bazie danych
use('zadania');
db.restaurants.find(
  { "grades.1": { date: ISODate("2014-08-11T00:00:00Z"), grade: "A", score: 9 } },
  { "grades.grade": 1, "grades.score": 1, name: 1, restaurant_id: 1 , _id: 0}
  )
  .sort({ restaurant_id: 1 })
  .limit(5);
  
  use('zadania');
  db.restaurants.find()
