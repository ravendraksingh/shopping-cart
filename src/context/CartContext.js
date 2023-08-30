import React, { useReducer } from "react";
import CartReducer from "./CartReducer";

const initialCart = {
  cart: [],
  dispatch: () => {},
};

const CartContext = React.createContext(initialCart);

export const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
