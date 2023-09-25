import React, { Fragment, useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import Product from "./Product";

import "../styles.css";

const ProductHome = () => {
  const [products, setProducts] = useState([]);
  const cartCtx = useContext(CartContext);
  //   console.log("cartCtx", cartCtx);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=30");
      if (response) {
        const data = await response.json();
        // console.log(data.products);
        setProducts(data.products);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container product__grid-container">
      {products &&
        products.length > 0 &&
        products.map((p, index) => (
          <Product product={p} key={"kj2#_" + index} />
        ))}
    </div>
  );
};

export default ProductHome;
