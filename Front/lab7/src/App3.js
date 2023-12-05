// zadanie 3 lab7
'use client';

import { useEffect, useState } from 'react';

export default function App() {
  const Liczniki = () => {

    const generateArray = () => {
      let res = []
      for (let i=0; i<=10; i++) {
        const randomInt = Math.floor(Math.random() * 30)
        const row = {
          value: randomInt,
          type: "decimal"
        };
        res.push(row)
      };
      return res
    };

    const handleDeleteNumber = (index) => {
      let newArray = [...myArray]
      newArray.splice(index, 1)
      setMyArray(newArray)
    }

    const handleChangeNumberSystem = (index) => {
      let newArray = [...myArray]
      if (myArray[index].type == "decimal") {
        newArray[index].value = newArray[index].value.toString(2)
        newArray[index].type = "binary"
      } else {
        newArray[index].value = parseInt(newArray[index].value, 2)
        newArray[index].type = "decimal"
      }
      setMyArray(newArray)
      }



    const [myArray, setMyArray] = useState([]);
    useEffect(() => {
      setMyArray(generateArray())


    }, []);
    return (
      <ul>
        {myArray.map((number, index) => (
          <li key={index}>
            <p>{number.value}</p>
            <button onClick={() => handleChangeNumberSystem(index)}>
              {(number.type==="decimal") ? "toBinary": "toDecimal" }
            </button>
            <button onClick={() => handleDeleteNumber(index)}>
              Delete this number
            </button>
          </li>
        ))}
      </ul>
    );
  };


  return (
      <Liczniki/>
   );
}