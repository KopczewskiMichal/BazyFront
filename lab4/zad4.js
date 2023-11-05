use("zadania");
db.restaurants.aggregate([{
  $match: {
    "address.street": "Wall Street"
  }},
  {
    $sort: {name: 1}
  },
  {
    $limit: 2
  },
  {
    $project: {
      address: "$address.coord",
      name: 1,
      _id: 0
    }
  }
])



// [
//   {
//     "address": [
//       -74.0116385,
//       40.707491
//     ],
//     "name": "Bank Of New York"
//   },
//   {
//     "address": [
//       -74.0116385,
//       40.707491
//     ],
//     "name": "Bank Of New York Cafe"
//   }
// ]