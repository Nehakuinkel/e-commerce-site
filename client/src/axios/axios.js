import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:3000/backend",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',  
    },
  });