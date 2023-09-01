import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductHome from "./products/ProductHome";
import Cart from "./products/Cart";

import ProductDetails from "./products/ProductDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductHome />} />
      <Route path="/home" element={<ProductHome />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
