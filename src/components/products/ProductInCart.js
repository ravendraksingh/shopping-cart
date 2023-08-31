import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import "../styles.css";
import {
  //   AiOutlinePlusCircle,
  //   AiOutlineMinusCircle,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { Row, Col } from "react-bootstrap";

const ProductInCart = ({ product }) => {
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
    <div className="d-flex prod__incart">
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="cart__img"
        />
      </div>
      <div className="ps-2">
        <div className="mb-2">
          {product.description}
        </div>
        <div>
          <span className="px-0 py-0">{"$" + product.price}</span>
          <span className="cart__tool float-end">
            <span className="ps-1 pe-2">-</span>
            <span className="">4</span>
            <span className="ps-2 pe-1">+</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
