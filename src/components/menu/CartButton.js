import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../context/CartContext";

const CartButton = () => {
  const { cart } = useContext(CartContext);
  let cartCount = cart ? cart.length : 0;

  return (
    <div className="nav-item">
      <Link to="/cart">
        <Badge id="badge" color="white" size="24px">
          {cartCount}
        </Badge>
        <AiOutlineShoppingCart color="white" size={24} />
      </Link>
    </div>
  );
};

export default CartButton;
