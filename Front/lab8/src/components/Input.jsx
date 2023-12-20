import React from "react";
import { useFormContext } from "./FormContext";

export default function Input({ name, placeholder="" }) {
    
  const { formData, updateFormData } = useFormContext();  // Wyjęcie potrzebnych rzeczy z kontextu

  const handleChange = (event) => {
    const value = event.target.value;
    updateFormData(name, value);
  };

  return (
    <div>
      <label>{name}</label>
      <input 
      type="text" 
      placeholder={placeholder}
      value={formData[name]}
      id={name}
      onChange={(event) => handleChange(event)}
      />
  </div>
  );
}
