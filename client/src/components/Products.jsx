import React, { useState } from 'react'
import { axiosClient } from '../axios/axios';
import { useForm } from "react-hook-form";

const Products = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const addProduct = async () => {
      try {
        let response = await axiosClient.post("/addProduct",data);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };
    addProduct();
  }
  
  return (
    <div>
     <form onSubmit={handleSubmit(onSubmit)} method="post">
        <label>Title:</label>
        <input type="text"  {...register("title")}/>
        <label>Description:</label>
        <input type="textbox" {...register("description")}/>
        <button type='submit' > Submit </button>
      </form>
    </div>
  )
}

export default Products