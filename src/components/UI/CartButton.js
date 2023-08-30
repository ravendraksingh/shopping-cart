import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <div>
      {/* <Nav.Link as={Link} to="/cart" className="cart__box"> */}
        <Badge id="badge" color="white" size="32px">
          0
        </Badge>
        <AiOutlineShoppingCart color="white" size={32} />
      {/* </Nav.Link> */}
    </div>
  );
};

export default CartButton;
