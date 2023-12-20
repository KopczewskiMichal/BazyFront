import React, { useContext, useEffect } from "react";
import Input from "./Input";
import Submit from "./Submit";

export default function Form() {
  return (
    <form>
        <Input name="email" placeholder="example@gmail.com"></Input>
        <Input name="password"></Input>
      <Submit />
    </form>
  );
}
