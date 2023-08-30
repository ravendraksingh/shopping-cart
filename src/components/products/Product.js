import React, { useContext } from "react";
import { Card, Row, Col } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import RatingStars from "../UI/RatingStars";

const Product = ({ product }) => {
  const cartCtx = useContext(CartContext);
  //   console.log("cartCtx", cartCtx);
  //   console.log(product);
  const addToCart = () => {
    console.log("addtocart");
    cartCtx.dispatch({
      type: "ADD_ITEM",
      item: product,
    });
  };

  return (
    // <Card className="product__card col-12 col-sm-6 col-md-4">
    <Card className="product__card">
      <Card.Body className="p-0">
        <a href={"/products/" + product.id}>
          <img src={product.thumbnail} className="product__img" />
        </a>
        <div className="d-flex justify-content-between px-0 py-2">
          <span className="mb-0">{product.title}</span>
          <div>
            <RatingStars rating={product.rating} />
          </div>
          <span className="px-0 py-0">{"$" + product.price}</span>
        </div>
      </Card.Body>
      <button className="btn btn-primary btn-sm mb-3" onClick={addToCart}>
        Add to cart
      </button>
    </Card>
  );
};

export default Product;
