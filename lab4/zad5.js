use("zadania");
db.restaurants.aggregate([{
  $match: {
    "address.coord": [-73.902463, 40.694924]
  }},
  {
    $unwind: "$grades"
  },
  {
    $sort: {"grades.date": 1}
  },
  {
    $project: {
      grades: {score: 1},   
      _id: 0
    }
  }
])