// zadanie 4 lab7
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  function getShoppingList() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching shopping list:", error);
      });
  }

  useEffect(() => {
    getShoppingList();
  }, []);

  const formProperties = [
    { name: "title", type: "text" },
    { name: "price", type: "text" },
    { name: "description", type: "text" },
    { name: "image", type: "text" },
    { name: "category", type: "text" },
  ];
  const [formData, setFormData] = useState(['' ,'', '','',''])
  // const [formData, setFormData] = useState([
  //   "Komputer",
  //   "40.23",
  //   "Opis",
  //   "obrazek",
  //   "coś innego",
  // ]);

  useEffect(() => {}, [formData]);

  const handleFormDataChange = (event, index) => {
    let newFormData = [...formData];
    newFormData[index] = event.target.value;
    setFormData(newFormData);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    const newProduct = {
      title: formData[0],
      price: formData[1],
      description: formData[2],
      image: formData[3],
      category: formData[4],
    }
    const newProductJSON = JSON.stringify(newProduct);
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: newProductJSON,
    }).then((res) => {
      if (res.status === 200) {
        console.log(newProduct);
        setProducts([...products, newProduct]);
      }
    });
  };

  return (
    <div>
      <p>Pobieramy wszystkie dane produktów, ale wyświetlanie opisu i linku do obrazka sprawia że czytelność jest zerowa</p>
      <ul>
        {products.map((elem, index) => (
          <li key={index}>
            {elem.title} price: {elem.price} category:{elem.category} 
          </li>
        ))}
      </ul>

      <form>
        {formProperties.map((elem, index) => (
          <p key={index}>
            <label>{elem.name}</label>
            <input
              type={elem.type}
              key={index}
              id={index}
              value={formData[index]}
              onChange={(event) => handleFormDataChange(event, index)}
            ></input>
          </p>
        ))}
        <p>
          <button onClick={handleConfirm}>Submit</button>
        </p>
      </form>
    </div>
  );
}
