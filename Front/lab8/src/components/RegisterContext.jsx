import React, { createContext, useContext, useState } from 'react';

const RegisterContext = createContext();

export const useRegisterContext = () => {
  return useContext(RegisterContext);
};

export default function RegisterProvider ({ children }) {
  const [registerData, setRegisterData] = useState({
    name:"",
    surname:"",
    email:"",
    password:"",
    dateOfBirth:"",
    accept: false,
    correctData: false,
    changed:false
  });

  const updateRegisterData = (name, value) => {
    setRegisterData((prevData) => ({...prevData, [name]:value}))
  }

  return (
    <RegisterContext.Provider value={{registerData, updateRegisterData}} >
      {children}
    </RegisterContext.Provider>
  )
}