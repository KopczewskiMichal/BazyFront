use("zadania");
db.restaurants.aggregate([{
  $match: {
    // borough: "Manhattan",
    // cuisine: "Pizza",
    "address.street": "5 Avenue"
  }
  },
  {
    $group: {
      _id: "$cuisine",
      count: {$sum : 1}
    }
  },
  {
    $sort: {
      count: -1,
      _id: 1
    }
  },
  {
    $project: {
      _id: 1,
      ilosc_restauracji: "$count"
    }
  }
])