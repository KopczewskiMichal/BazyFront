use("zadania");
db.restaurants.aggregate([{
  $match: {
    borough: "Manhattan",
    cuisine: "Pizza"
  }
  },
  {
    $addFields: {
      srednia_ocen: {$avg: "$grades.score"}
    }
  },
  {
    $sort: {
      srednia_ocen: -1
    }
  },
  {
    $limit: 5
  },
  {
    $project: {
      name: 1,
      // borough: 1, 
      srednia_ocena: {$round: ["$srednia_ocen", 1]},
      // "grades.score": 1,
      _id: 0
    }
  }
])