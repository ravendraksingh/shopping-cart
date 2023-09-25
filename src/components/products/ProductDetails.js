import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./productdtls.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [presentInCart, setPresentInCart] = useState(false);
  const cartCtx = useContext(CartContext);
  const { cart } = cartCtx;

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

  const addToCart = () => {
    console.log("addtocart");
    cartCtx.dispatch({
      type: "ADD_ITEM",
      item: product,
    });
    setPresentInCart(true);
  };

  const removeFromCart = () => {
    console.log("removeFromCart");
    setPresentInCart(false);
  };

  return (
    <div className="container pdtls__container">
      <div className="prod__dtls">
        <div className="text-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img__main"
          />
        </div>
        <div className="my-2">
          <p className="text">{product.description}</p>
          <span>Brand: {product.brand}</span>
          <span className="float-end">Price: ${product.price}</span>
          <p>
            <span>Discount: {product.discountPercentage}%</span>
            <span className="float-end">Rating: {product.rating}</span>
          </p>
        </div>
        <div className="text-center">
          {!presentInCart && (
            <button
              type="button"
              className="btn btn-success btn__add"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
          {presentInCart && (
            <button
              type="button"
              className="btn btn-danger btn__add"
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
      <div className="container px-0 more__img-container">
        {product?.images?.map((i, index) => (
          <img
            src={i}
            alt={"lp2nb2#" + index}
            className="img2"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
