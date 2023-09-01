import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import "../styles.css";

const ProductInCart = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const { cart } = cartCtx;
  //   console.log("cartCtx", cartCtx);
  console.log(cart);
  let itemCount = cart
    ? cart?.filter((item) => item.id === product.id).length
    : 0;

  const addToCart = () => {
    console.log("addtocart");
    cartCtx.dispatch({
      type: "ADD_ITEM",
      item: product,
    });
  };

  const removeFromCart = () => {
    cartCtx.dispatch({
      type: "REMOVE_ITEM",
      item: product,
    });
  };

  return (
    <div className="prod__incart">
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="cart__img"
        />
      </div>
      <div className="ps-2 w-100">
        <div className="mb-2">{product.description}</div>
        <div>
          <span className="px-0 py-0">{"$" + product.price}</span>
          <span className="cart__tool float-end me-3">
            <span className="ps-1 pe-2" onClick={removeFromCart}>
              -
            </span>
            {itemCount}
            <span className="ps-2 pe-1" onClick={addToCart}>
              +
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
