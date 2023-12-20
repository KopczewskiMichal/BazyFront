import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function Comments () {
  const [comments, setComments] = useState([])
  function getData() {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
      setComments(res.data)
    })
    .catch((error) => console.error(error))
  }

  useEffect(()=> {
    getData()
  }, [comments])

  return (
    <ul>
      {comments.map((elem, index) => 
        <li key={index}>{elem.email}: {elem.name}</li>)
      }
    </ul>
  )
}