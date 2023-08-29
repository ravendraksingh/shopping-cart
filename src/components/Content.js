import React, { useEffect, useState } from "react";
import Product from "./Product";

import "../styles.css";

const Content = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=50");
      if (response) {
        const data = await response.json();
        console.log(data.products);
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
    <div className="product__grid-container">
      {products &&
        products.length > 0 &&
        products.map((p) => <Product product={p} />)}
    </div>
  );
};

export default Content;
