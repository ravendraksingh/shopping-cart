import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import "./sidenav.css";

const SideNav = (props) => {
  const [sidebar, setSidebar] = useState(props.sidebar);
  const closeNav = () => {
    props.onCloseSideNav();
  };

  useEffect(() => {
    setSidebar(props.sidebar);
  }, [props.sidebar]);

  return (
    <Fragment>
      {/* <AiIcons.AiOutlineClose onClick={showSidebar} className="navicon" /> */}
      <div
        className="sidenav"
        style={{
          width: sidebar.width ?? "0px",
          height: sidebar.height ?? "0px",
        }}
      >
        <div>
          <button className="btn btn-link closebtn" onClick={closeNav}>
            &times;
          </button>
        </div>
        <div className="text-start">
          <Nav.Link as={Link} to="/home" className="navlink" onClick={closeNav}>
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/products"
            className="navlink"
            onClick={closeNav}
          >
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/cart" className="navlink" onClick={closeNav}>
            Cart
          </Nav.Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SideNav;
