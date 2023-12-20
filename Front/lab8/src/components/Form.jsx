import React, { useContext, useEffect } from "react";
import Input from "./Input";
import Submit from "./Submit";
import ShowLoggedUserData from "./ShowLoggedUserData";

export default function Form() {
  return (
    <div>
      <h2>Log in</h2>
      <form>
        <Input name="email" placeholder="example@gmail.com"></Input>
        <Input name="password"></Input>
        <Submit />
        <ShowLoggedUserData />
      </form>
    </div>
  );
}
