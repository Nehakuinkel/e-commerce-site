import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../components/Index";
import Products from "../components/Products";

function Routing() {
  return (
    <Routes>
      <Route path="products" element={<Products />} />
      <Route path="/" element={<Index />} />
    </Routes>
  );
}

export default Routing;
