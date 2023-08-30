import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./main/Content";
import Cart from "./products/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/home" element={<Content />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
