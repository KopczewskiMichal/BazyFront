import React from "react";
import { useFormContext } from "./FormContext";

export default function Submit () {
  const {formData} = useFormContext()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <button
    onClick={(event) => handleSubmit(event)}>
      Submit
    </button>
  )
}