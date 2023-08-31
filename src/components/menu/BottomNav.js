import React, { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./nav.css";
import CartContext from "../../context/CartContext";
import { Badge } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const BottomNav = () => {
  //   const [cartCount, setCartCount] = useState(0);
  const { cart } = useContext(CartContext);
  let cartCount = cart ? cart.length : 0;
  //   let cartCount = cart ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  return (
    <div className="navbar fixed-bottom px-3 py-2">
      <div className="nav-item">
        <Link to="/">
          <AiOutlineHome color="white" size="24" />
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/cart">
          <Badge id="badge" color="white" size="24px">
            {cartCount}
          </Badge>
          <AiOutlineShoppingCart color="white" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
