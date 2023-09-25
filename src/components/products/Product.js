import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import RatingStars from "../UI/RatingStars";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const [presentInCart, setPresentInCart] = useState(false);
  const { cart } = cartCtx;
  //   console.log("cartCtx", cartCtx);
  //   console.log(product);
  useEffect(() => {
    let prodIndexInCart = -1;
    if (cart && cart.length > 0) {
      prodIndexInCart = cart.findIndex((item) => item.id === product.id);
      if (prodIndexInCart !== -1) {
        setPresentInCart(true);
      }
    }
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
    cartCtx.dispatch({
      type: "REMOVE_ITEM",
      item: product,
    });
    setPresentInCart(false);
  };

  return (
    // <Card className="product__card col-12 col-sm-6 col-md-4">
    <div className="card product__card">
      <Link to={"/products/" + product.id}>
        <img
          src={product.thumbnail}
          className="product__img"
          // loading="lazy"
        />
      </Link>
      <div className="d-flex justify-content-between px-2 py-2">
        <span className="mb-0">{product.title}</span>
        <div>
          <RatingStars rating={product.rating} />
        </div>
        <span className="px-0 py-0">{"$" + product.price}</span>
      </div>

      {!presentInCart && (
        <button
          id="btn_addtocart"
          className="btn btn-success btn-sm mx-2 mb-2"
          onClick={addToCart}
        >
          Add to cart
        </button>
      )}
      {presentInCart && (
        <button
          id="btn_removefromcart"
          className="btn btn-danger btn-sm mx-2 mb-2"
          onClick={removeFromCart}
        >
          Remove from cart
        </button>
      )}
    </div>
  );
};

export default Product;
