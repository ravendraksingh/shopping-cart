import React, { useState } from "react";
import CartButton from "../UI/CartButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import SideNav from "./SideNav";
import useWindowDimensions from "../../utils/ScreenUtil";
import "./nav.css";

const TopNav = () => {
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
    <div className="navbar fixed-top px-3 py-2">
      <div className="nav-item">
        <GiHamburgerMenu
          size="32px"
          className="hamburger"
          onClick={openSideNavHandler}
          color="white"
        />
      </div>
      <div className="nav-item d-flex flex-grow-1">
        <form className="d-flex flex-grow-1">
          <input
            className="form-control ms-3 me-2 w-100"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default TopNav;
