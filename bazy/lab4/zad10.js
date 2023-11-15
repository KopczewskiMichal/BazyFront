use("zadania");
db.restaurants.aggregate([{
  $match: {
    cuisine: "Chinese",
  }
  },
  {    
    $addFields: {
    srednia_ocen: {$avg: "$grades.score"}
  }
  },
  {
    $group: {
      _id: "$borough",
      ilosc: {$sum : 1},
      suma_srednich: {$sum: "$srednia_ocen"}
    }
  },
  {
    $sort: {
      _id: 1
    }
  },
  {
    $project: {
      _id: 1,
      // suma_srednich: "$suma_srednich",
      // ilosc_restauracji: "$ilosc",
      srednia_ocena_dzielnicy: 
        {$round: [{$divide: ["$suma_srednich", "$ilosc"]}, 2]}
    }
  }
])