import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import "../styles.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

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
    <div className="d-flex mb-3 px-5 pt-5 w-100 justify-content-between prod__incart">
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="cart__img"
        />
      </div>
      <div className="d-flex flex-column justify-content-between p-2">
        <div>
          <span className="px-0 py-0">{product.title}</span>
          <p className="px-0 py-0">{"$" + product.price}</p>
        </div>
        <div>
          <AiOutlineMinusCircle size={22} /><span className="px-2">1</span><AiOutlinePlusCircle size={22} />
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
