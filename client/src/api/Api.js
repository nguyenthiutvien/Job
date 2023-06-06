import React from 'react'
import axios from 'axios'
export const postUser =async (user) => {
  return (
      await axios.post("http://127.0.0.1:8000/api/users",user)
  )
}
export const getUser = async ()=>{
  return (
    await axios.get("http://127.0.0.1:8000/api/users")
  )
}
export const confirmEmail = async (email)=>{
  return (
    await axios.get(`http://127.0.0.1:8000/api/users/${email}/edit`)
  )
}

export const getCode=async (email)=>{
  return (
    await axios.get(`http://127.0.0.1:8000/api/users/${email}/confirm-code`)
  )
}

export const recoverPassword=async (email)=>{
  return(
    await axios.put(`http://127.0.0.1:8000/api/users/${email}/confirm-email`)
  )
}

export const postCompany=async (company)=>{
  return (
    await axios.post("http://127.0.0.1:8000/api/company",company)
  )
}

export const getCompany=async ()=>{
  return (
    await axios.get("http://127.0.0.1:8000/api/company")
  )
}

export const resetPassword=async(email,password)=>{
  return(
    await axios.put(`http://127.0.0.1:8000/api/users/${email}/confirm-email`,{password:password})
  )
}