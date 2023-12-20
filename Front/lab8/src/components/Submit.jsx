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
  }

  return (
    <div>
    <button
    onClick={(event) => handleSubmit(event)}>
      Submit
    </button>
    {(formData["isCorrect"]) ? 
      (<p>Dane logowania są poprawne</p>) : (<p>Dane logowania są niepoprawne</p>)
    }
    </div>
  )
}