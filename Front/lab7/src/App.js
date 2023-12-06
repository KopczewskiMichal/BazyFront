// zadanie 4 lab7
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {

  const [products, setProducts] = useState([])
  const DisplayList = () => {
    function getShoppingList() {
      axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data)
      })
    }

    
    useEffect(() => {
      getShoppingList()
    },[products])

    return (
      <ul>
        {products.map((elem, index) => (
          <li key={index}>{elem.title} price: {elem.price}</li>
        ))}
      </ul>
    )
  }

    // app.post("/games/:id", (req, res) => {
    //   const id = req.params.id;
    //   const moveData = req.body; // pozycja spacja symbol
    //   const position = parseInt(moveData[0]);
    //   const symbol = moveData[2]
    //   if (games[id][position - 1] === " ") {
    //     games[id][position - 1] = symbol
    //     res.send(`${gameToBoardString(games[id])}\n`)
    //   } else {
    //     res.send(`Nie możesz w tym miejscu wykonać ruchu, nie jest ono puste\n${gameToBoardString(games[id])}\n`)
    //   }
  //   {
  //     title: 'test product',
  //     price: 13.5,
  //     description: 'lorem ipsum set',
  //     image: 'https://i.pravatar.cc',
  //     category: 'electronic'
  // }
    // })



  const Form = () => {
    const formProperties = [
      {name: "title", type: "text"},
      {name: "price", type: "number"},
      {name: "description", type: "text"},
      {name: "image", type: "text"},
      {name: "category", type: "text"}
    ]
    const [formData, setFormData] = useState("")




    return (
      <form>
        {formProperties.map((elem, index) => (
          <p>
            <label>{elem.name}</label>
            <input type={elem.type}
            id={elem.name}
            value={formData[index]}
            ></input>
          </p>
        ))}

        
      </form>
    )
  }




  return (
  <div>
      <DisplayList/>
      <Form/>
  </div>
   );
}