import React, { useState } from "react";
import { useWindowDimensions } from "../../utils/ScreenUtil";
import NewSideNav from "./NewSideNav";
import AutoComplete from "./AutoComplete";
import CartButton from "./CartButton";
import "./nav.css";

const TopNav = () => {
  const { width: screenwidth } = useWindowDimensions();
  const [opensidebar, setOpensidebar] = useState({
    open: false,
    height: "100vh",
    width: "0",
  });

  const openSideNavHandler = () => {
    console.log("openSideNav in MainHeader.js clicked");
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
    <div id="idtopnav" className="navbar topnav">
      <NewSideNav />
      <AutoComplete />
      <CartButton />
    </div>
  );
};

export default TopNav;
