import React from "react";
import {useRegisterContext}  from './RegisterContext'

export default function RegisterCheckbox({ name, placeholder="", type='text'}) {
    
  const { registerData, updateRegisterData } = useRegisterContext();  // Wyjęcie potrzebnych rzeczy z kontextu

  const handleChange = (event) => {
    const value = event.target.value;
    updateRegisterData(name, value);
  };


  return (
    <div>
      <label>{name}</label>
      <input 
      type={type} 
      placeholder={placeholder}
      checked={registerData[name]}
      onChange={(event) => handleChange(event)}
      />
  </div>
  );
}
