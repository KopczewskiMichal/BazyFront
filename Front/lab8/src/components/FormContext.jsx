import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};


export default function FormProvider  ({ children }) {
  const [formData, setFormData] = useState({});

  const updateFormData = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <FormContext.Provider value={{formData, updateFormData}}>
      {children}
    </FormContext.Provider>
  )
};