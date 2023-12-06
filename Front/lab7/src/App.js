// zadanie 4 lab7
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  
  const [products, setProducts] = useState([])
  const DisplayList = () => {
    function getShoppingList() {
      axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data)})
      .catch(error => {
        console.error('Error fetching shopping list:', error);
      });
    }
    
    
    useEffect(() => {
      getShoppingList()

    })
    
    return (
      <ul>
        {products.map((elem, index) => (
          <li key={index}>{elem.title} price: {elem.price}</li>
        ))}
      </ul>
    )
  }

  
  const Form = () => {
    const formProperties = [
      {name: "title", type: "text"},
      {name: "price", type: "text"},
      {name: "description", type: "text"},
      {name: "image", type: "text"},
      {name: "category", type: "text"}
    ]
    // const [formData, setFormData] = useState(['' ,'', '','',''])
    const [formData, setFormData] = useState(['Komputer','40.23', 'Opis','obrazek','coś innego'])
    
    useEffect(()=>{
      
    },[formData])
    
    const handleFormDataChange = (event, index) => {
      let newFormData = [...formData]
      newFormData[index] = event.target.value
      setFormData(newFormData)
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
    // {

    const handleConfirm = event => {
      event.preventDefault();
      const newProduct = JSON.stringify(
        {
            title: formData[0],
            price: formData[1],
            description: formData[2],
            image: formData[3],
            category: formData[4]
        })
      fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body: newProduct
        })
            .then(res => {
              if (res.status === 200) {
                setProducts([...products, newProduct])
                console.log("powinno działać")  
              }
            })
      }

    return (
      <form>
        {formProperties.map((elem, index) => (
          <p key={index}>
            <label>{elem.name}</label>
            <input type={elem.type}
            key={index}
            id={index}
            value={formData[index]}
            onChange={(event) => handleFormDataChange(event, index)}
            ></input>
          </p>
            ))}
          <p>
            <button
            onClick={handleConfirm}
            >
              Submit
            </button>
          </p>
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