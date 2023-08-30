import React, { useState } from "react";
import CartButton from "../UI/CartButton";
import { AiOutlineHome } from "react-icons/ai";
import "./nav.css";

const BottomNav = () => {
  return (
    <div className="navbar fixed-bottom px-3 py-2">
      <div className="nav-item">
        <AiOutlineHome color="white" size="24" />
      </div>
      <div className="nav-item">
        <CartButton />
      </div>
    </div>
  );
};

export default BottomNav;
