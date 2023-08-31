import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div className="container fs-4">
      ProductDetails
      <img src={product.thumbnail} alt={product.title} className="w-100" />
      <p className="">{product.description}</p>
      <p>Brand: {product.brand}</p>
    </div>
  );
};

export default ProductDetails;
