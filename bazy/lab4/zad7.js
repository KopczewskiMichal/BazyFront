use("zadania");
db.restaurants.aggregate([{
  $match: {
    borough: "Manhattan"
  }
  },
  {
    $addFields: {
      ilosc_ocen: {$size: { "$ifNull": [ "$grades", [] ] } }
    }
  },
  {
    $sort: {
      ilosc_ocen: -1
    }
  },
  {
    $limit: 7
  },
  {
    $sort: {
      name: 1
    }
  },
  {
    $project: {
      ilosc_ocen: 1,
      name: "$name",
      _id: 0
    }
  }
])