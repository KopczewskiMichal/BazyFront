import React from "react";
import { useRegisterContext } from "./RegisterContext";


export default function RegisterSubmit (name="Submit") {
  const {registerData} = useRegisterContext()

  function addUser () {
    localStorage.setItem(registerData["email"], JSON.stringify(registerData))
  }

  function handleSubmit (event) {
    event.preventDefault()
    addUser()
  }

  return (
    <div>
    {(registerData["correctData"]) ? 
    <button
    onClick={(event) => handleSubmit(event)}>
      Submit
    </button>
    : <p>Przycisk Submit pojawi się po poprawnym wypełnieniu formularza</p>
     }
    </div>
  )
}