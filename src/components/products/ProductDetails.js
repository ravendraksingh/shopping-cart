import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log("id", id);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/" + id);
      if (response) {
        const data = await response.json();
        console.log(data);
        setProduct(data);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mt-1 fs-4">
      <img src={product.thumbnail} alt={product.title} className="w-100" />
      <div className="mt-2">
        <p className="">{product.description}</p>
        <span>Brand: {product.brand}</span>
        <span className="float-end">Price: ${product.price}</span>
        <p>
          <span>Discount: {product.discountPercentage}%</span>
          <span className="float-end">Rating: {product.rating}</span>
        </p>
      </div>
      <div className="other__img_container">
        {product?.images?.map((i, index) => (
          <img src={i} alt={"lp2nb2#" + index} className="other__img" />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
