import React from "react";
import { useFormContext } from "./FormContext";

export default function Submit () {
  const {formData, updateFormData} = useFormContext()

  const validateData = () => {
    const emailRegex = new RegExp(/^.+@.+\..+$/)
    return (emailRegex.test(formData["email"])) ? true : false;
  }

  function handleSubmit (event) {
    event.preventDefault()
    updateFormData("isCorrect", validateData())
    if (formData["isCorrect"] == true) {
      const userData = localStorage.getItem(formData["email"])
      const password = JSON.parse(localStorage.getItem(formData["email"]))["password"]
      if (formData["password"] === password) {
        updateFormData("userData", userData)
        console.log(JSON.stringify(formData["userData"]))
      }
    }
  }

  return (
    <div>
    <button
    onClick={(event) => handleSubmit(event)}>
      Log in
    </button>
    {(formData["isCorrect"]) ? 
      (<p>Dane logowania są poprawne</p>) : (<p>Dane logowania są niepoprawne</p>)
    }

    </div>
  )
}