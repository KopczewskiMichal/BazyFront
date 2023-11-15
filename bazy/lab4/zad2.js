// use("zadania");
// db.restaurants.findOne()

use("zadania");
db.restaurants.aggregate([{
  $match: {
    name: "White Castle",
    "address.street": "Boston Road"
  }},
  {
    $project: {
      adres: "$address.building",
      name: 1,
      ulica: "$address.street",
      _id: 0
    }
  }
])


// use("zadania");
// db.restaurants.find(
//   {
//     name: "White Castle",
//     "address.street": "Boston Road"
//   },
//   {
//     _id: 0, // Wyłącz wyświetlanie identyfikatora
//     adres: "$address.building", // Wyświetl "adres" przed "name"
//     name: 1,
//     ulica: "$address.street" // Wyświetl "ulica" na końcu
//   }
// )
