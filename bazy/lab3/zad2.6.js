use('zadania');

db.restaurants.find(
    { grades: { $elemMatch: { "grade": "A", "score": 11, "date": ISODate("2014-08-11T00:00:00Z") } } },
    { "name": 1, "restaurant_id": 1, "grades.grade": 1, "grades.score": 1, "_id": 0 })
.sort({ restaurant_id: 1 })
.limit(5);





