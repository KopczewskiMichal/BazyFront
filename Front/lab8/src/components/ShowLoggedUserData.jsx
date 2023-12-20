import React from "react";
import { useFormContext } from "./FormContext";

export default function ShowLoggedUserData() {
  const {formData} = useFormContext() 

  if (formData["userData"] == "") return null;
  else return (
    <p>{formData["userData"]}</p>
  ) 
}