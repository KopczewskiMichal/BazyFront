use("persons")
db.persons_csv.find({}).limit(10)

use("persons")
db.persons_csv.updateMany({}, {$set:  {friends:[]}})

use("persons")
db.persons_csv.updateMany({gender: "Female"}, {$set: {childrens: [
  {
    children_name: "...",
    children_father: "..."
  },
  {
    children_name: "...",
    children_father: "..."
  }
]}})
db.persons_csv.updateOne({gender: "Female"}, {$set: {childrens: [
  {
    children_name: "Sebastian",
    children_father: "Jarosław"
  },
  {
    children_name: "Aleksandra",
    children_father: "Mateusz"
  }
]}})
