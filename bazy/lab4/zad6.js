use("zadania");
db.restaurants.aggregate([{
  $match: {
    restaurant_id: "40362098"
  }
  },
  {
    $addFields: {
      temp_pierwsza_ocena: {$arrayElemAt: [ "$grades", 0]},
      temp_ostatnia_ocena: {$arrayElemAt: [ "$grades", -1]}
    }
  },
  {
    $project: {
      name: "$name",
      ostatnia_ocena: "$temp_ostatnia_ocena.score",
      pierwsza_ocena: "$temp_pierwsza_ocena.score",
      _id: 0
    }
  }
])