import React, { useState } from 'react'
import { postCompany } from "../api/Api"
export const EmployeePayment = () => {
    const employees=JSON.parse(localStorage.getItem("employee"))
    const [employee,setEmployee]=useState({
        company_name: employees.company_name,
        logo: employees.logo,
        email: employees.email,
        password:employees.password,
        address: employees.address,
        number_phone: employees.number_phone
    })
    const addNewCompany = async () => {
        postCompany(employee)
    }
    const handelPayment=(e)=>{
        e.preventDefault()
        addNewCompany()
    }

  return (
    <div>
        <button onClick={handelPayment} style={{ background:"red" }}>Thanh Toán</button>
    </div>
  )
}
