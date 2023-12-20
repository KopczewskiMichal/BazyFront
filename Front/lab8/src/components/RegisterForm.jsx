import React, { useContext, useEffect } from "react";
import {useRegisterContext} from "./RegisterContext";
import RegisterInput from "./RegisterInput";
import RegisterCheckbox from "./RegisterCheckbox";
import RegisterSubmit from "./RegisterSubmit";

export default function RegisterForm () {
  const {registerData, updateRegisterData} = useRegisterContext()

  const validateData = () => {
    const emailRegex = new RegExp(/^.+@.+\..+$/)
    const currentDate = new Date();
    if (registerData["accept"] === "on" &&
    emailRegex.test(registerData["email"]) &&
    new Date(registerData["dateOfBirth"]) < currentDate &&
    registerData["name"] !== "" &
    registerData["surname"] !== "" &&
    registerData["password"] !== ""
    )
    return true;
    else return false;
  }


  useEffect(() => {
    if (registerData["changed"] === true) {
      updateRegisterData("correctData",  validateData())
      updateRegisterData("changed", false)
    }
  }, [registerData])
  

  return (
    <div>
      <h2>Register</h2>
      <form>
        <RegisterInput name="name"/>
        <RegisterInput name="surname"/>
        <RegisterInput name="email" placeholder="example@gmail.com"/>
        <RegisterInput name= "password"/>
        <RegisterInput name="dateOfBirth" type="date"/>
        <RegisterCheckbox name="accept" type="checkbox" />
        <RegisterSubmit />
      </form>
    </div>
  )
}