import React from 'react'

export default function FormValidation(values) {
  const errors ={}

  const email_val = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
//   const phone_val = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.name === ""){
        errors.name = "Name is Required";
    }
    if(values.email === ""){
        errors.name = "Email is Required";
    }
    else if(!email_val.test(values.email)){
        errors.email ="Email is Not valid"
    }
    if(values.phone ===""){
        errors.name = "Phone Number is Required";
    }
}
