use("zadania");
db.restaurants.aggregate([{
  $match: {
    "address.zipcode": "11356",
    "address.street": "14 Avenue"
  }},
  {
    $sort: {"address.building": 1}
  },
  {
    $limit: 1
  },
  {
    $project: {
      address: {building:1},
      _id: 0
    }
  }
])