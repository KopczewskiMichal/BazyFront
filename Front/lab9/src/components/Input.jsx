import React from 'react';

export default function Input ({formik, name, type}) {

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
          id={name}
          type={type}
          {...formik.getFieldProps(name)}
      />
      {formik.touched[name] && formik.errors[name] ? (
          <div>{formik.errors[name]}</div>
      ) : null}
    </div>
  )
}

