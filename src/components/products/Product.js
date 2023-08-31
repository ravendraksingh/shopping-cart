import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import RatingStars from "../UI/RatingStars";
import { Link } from "react-router-dom";

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
  };

  return (
    // <Card className="product__card col-12 col-sm-6 col-md-4">
    <Card className="product__card">
      <Card.Body className="p-0">
        <Link to={"/products/" + product.id}>
          <img src={product.thumbnail} className="product__img" />
        </Link>
        <div className="d-flex justify-content-between px-0 py-2">
          <span className="mb-0">{product.title}</span>
          <div>
            <RatingStars rating={product.rating} />
          </div>
          <span className="px-0 py-0">{"$" + product.price}</span>
        </div>
      </Card.Body>
      {!presentInCart && (
        <button
          id="btn_addtocart"
          className="btn btn-primary btn-sm mb-3"
          onClick={addToCart}
        >
          Add to cart
        </button>
      )}
      {presentInCart && (
        <button
          id="btn_removefromcart"
          className="btn btn-danger btn-sm mb-3"
          onClick={removeFromCart}
        >
          Remove from cart
        </button>
      )}
    </Card>
  );
};

export default Product;
