const CartReducer = (cart, action) => {
  console.log("in CartReducer", cart, action);
  console.log("Cart::", cart);
  console.log("Action::", action);

  let newCart;
  switch (action.type) {
    case "ADD_ITEM":
      if (cart === null || cart.length === 0) {
        newCart = [{ ...action.item }];
      } else {
        newCart = [...cart, { ...action.item }];
      }
      return newCart;
    case "REMOVE_ITEM":
      if (cart === null || cart.length === 0) {
      } else {
        newCart = [...cart];
        const productIndex = newCart.findIndex((c) => c.id === action.item.id);
        newCart.splice(productIndex, 1);
      }
      return newCart;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default CartReducer;