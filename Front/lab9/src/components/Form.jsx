import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from './Input';

export default function Form () {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      body: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(1, "Must be 1 character or more")
        .max(20, "Must be 20 characters or more")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email adress")
        .required("Requred"),
      body: Yup.string()
        .required("Optional")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
  },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input 
      formik={formik}
      name={'name'}
      type={'text'}/>
      <Input 
      formik={formik}
      name={'email'}
      type={'email'}/>
      <Input 
      formik={formik}
      name={'body'}
      type={'textArea'}/>

      <button
        onClick={() => formik.resetForm()}
      >
        Reset
      </button>
      
      <button type="submit">Submit</button>
    </form>
  )

}