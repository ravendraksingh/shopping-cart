import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./main/Content";
import Cart from "./products/Cart";
import ProductDetails from "./products/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/home" element={<Content />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
