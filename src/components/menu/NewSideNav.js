import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

import "./sidenav.css";

const NewSideNav = (props) => {
  //   const [sidebar, setSidebar] = useState(props.sidebar);
  //   const closeNav = () => {
  //     props.onCloseSideNav();
  //   };

  //   useEffect(() => {
  //     setSidebar(props.sidebar);
  //   }, [props.sidebar]);

  //   const mouseOutHandler = () => {
  //     console.log("mouseOutHandler");
  //   };

  return (
    <Fragment>
      <button
        className="btn btn-primary sidenav__btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidenav"
        aria-controls="offcanvasSidenav"
      >
        <GiHamburgerMenu size="24px" className="hamburger" color="white" />
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasSidenav"
        aria-labelledby="offcanvasSidenavLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSidenavLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="text-start">
            <Nav.Link
              as={Link}
              to="/home"
              className="navlink"
              data-bs-dismiss="offcanvas"
            >
              Home
            </Nav.Link>
            {/* <Nav.Link
              as={Link}
              to="/products"
              className="navlink"
              data-bs-dismiss="offcanvas"
            >
              Products
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/cart"
              className="navlink"
              data-bs-dismiss="offcanvas"
            >
              Cart
            </Nav.Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewSideNav;
