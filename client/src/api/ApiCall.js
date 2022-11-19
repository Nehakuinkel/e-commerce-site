import { axiosClient } from "../axios/axios";

export const getProducts = async () => {
  try {
    let response = await axiosClient.get("/getProduct");
   return response
  } catch (error) {
    console.log(error);
  }
};
