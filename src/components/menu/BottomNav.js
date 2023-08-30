import React, { useState } from "react";
import CartButton from "../UI/CartButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import SideNav from "./SideNav";
import useWindowDimensions from "../../utils/ScreenUtil";
import "./nav.css";

const BottomNav = () => {
  const { width: screenwidth } = useWindowDimensions();
  const [opensidebar, setOpensidebar] = useState({
    open: false,
    height: "100vh",
    width: "0",
  });

  const openSideNavHandler = () => {
    //console.log("openSideNav in MainHeader.js clicked");
    let currentWidth = "300px";
    if (screenwidth !== null && screenwidth < 450) {
      //   currentWidth = "100vw";
      currentWidth = "60vw";
    }
    setOpensidebar((prevState) => ({
      ...prevState,
      open: true,
      //width: "250px"
      width: currentWidth,
      height: "100vh",
    }));
  };

  const closeSideNavHandler = () => {
    //console.log("closeSideNavHandler in MainHeader.js clicked");
    setOpensidebar((prevState) => ({
      ...prevState,
      open: false,
      width: "0",
    }));
  };

  return (
    <div className="navbar fixed-bottom px-3 py-2">
      <div className="nav-item">
        <AiOutlineHome color="white" size="32" />
      </div>
      <div className="nav-item">
        <CartButton />
      </div>
    </div>
  );
};

export default BottomNav;
