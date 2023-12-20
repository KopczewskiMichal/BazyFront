import React from "react";
import {useRegisterContext}  from './RegisterContext'
import RegisterCheckbox from "./RegisterCheckbox";

export default function RegisterInput({ name, placeholder="", type='text'}) {
    
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
      value={registerData[name]}
      onChange={(event) => handleChange(event)}
      />
    </div>
  );
}
