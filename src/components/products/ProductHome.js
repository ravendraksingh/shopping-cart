import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import Product from "./Product";
import { Capitalize } from "../../utils/StringUtils";

import "../styles.css";

const ProductHome = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(undefined);
  const cartCtx = useContext(CartContext);
  //   console.log("cartCtx", cartCtx);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.lor("Error: ", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  function categoryChangeHandler(e) {
    // console.log(e.target.value);
    setFilteredCategory(e.target.value);
  }

  const fetchProducts = async () => {
    let productUrl = "https://dummyjson.com/products?limit=30";
    if (filteredCategory !== undefined) {
      productUrl =
        "https://dummyjson.com/products/category/" + filteredCategory;
    }
    try {
      const response = await fetch(productUrl);
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filteredCategory]);

  console.log("categories", categories);

  return (
    <div className="container">
      <div className="pdhome__options">
        <select
          placeholder="choose your category"
          className="form-select mb-3"
          onChange={categoryChangeHandler}
        >
          {categories.map((category, index) => (
            <option key={"aoj3#mz_" + index} value={category}>
              {Capitalize(category)}
            </option>
          ))}
        </select>
      </div>
      <div className="product__grid-container">
        {products &&
          products.length > 0 &&
          products.map((p, index) => (
            <Product product={p} key={"kj2#_" + index} />
          ))}
      </div>
    </div>
  );
};

export default ProductHome;
