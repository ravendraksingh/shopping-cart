import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "../../utils/ScreenUtil";
import NewSideNav from "./NewSideNav";
import CartButton from "./CartButton";
import "./nav.css";
import { TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";

const NewTopNav = () => {
  const { width: screenwidth } = useWindowDimensions();
  const [products, setProducts] = useState([]);
  const [opensidebar, setOpensidebar] = useState({
    open: false,
    height: "100vh",
    width: "0",
  });

  const fetchProducts = async () => {
    let productUrl = "https://dummyjson.com/products?select=title,id";
    let _prod = [];
    try {
      const response = await fetch(productUrl);
      const data = await response.json();
        console.log("data", data);
      //   setProducts(data?.products?.title);
      data?.products?.map((d) =>
        _prod.push({
          label: d.title,
        })
      );
      setProducts(_prod);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
      <Autocomplete
        options={products}
        sx={{ width: 300, color: "#fff", backgroundColor: "#fff" }}
        renderInput={(params) => <TextField {...params} label="Product" />}
      />
      <CartButton />
    </div>
  );
};

export default NewTopNav;
