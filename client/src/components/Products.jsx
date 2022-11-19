import React from 'react'
import { axiosClient } from '../axios/axios';
//import { getProducts } from '../api/ApiCall'


const Products = () => {
  const getProducts = async () => {
    try {
      let response = await axiosClient.get("/getProduct");
     return response
    } catch (error) {
      console.log(error);
    }
  };
  getProducts();
  return (
    <div>Products</div>
  )
}

export default Products