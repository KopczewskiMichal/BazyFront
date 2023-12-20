import React, { useContext, useEffect } from "react";
import { useFormContext } from "./FormContext";
import Input from "./Input";

export default function Form () {


  return (
    <form>
      <p>
        <Input
        name="email"
        placeholder="example@gmail.com"
        ></Input>
      </p>
      <p>
        <Input
        name="password"
        ></Input>
      </p>
    </form>
  ) 
}
