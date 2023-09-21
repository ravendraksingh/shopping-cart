import React, { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./nav.css";
import CartContext from "../../context/CartContext";
import { Badge } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsPersonExclamation, BsPersonCheck } from "react-icons/bs";
import UserContext from "../../context/UserContext";
import NewSideNav from "./NewSideNav";

const BottomNav = () => {
  //   const [cartCount, setCartCount] = useState(0);
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  let cartCount = cart ? cart.length : 0;
  //   let cartCount = cart ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  //   const showLogoutHandler = () => {};

  return (
    // <div id="idbottomnav" className="container navbar bottomnav">
    <div
      id="idbottomnav"
      className="d-md-none container navbar bottomnav fixed-bottom"
    >
      <div className="nav-item">
        <Link to="/">
          <AiOutlineHome color="white" size="24" />
        </Link>
      </div>
      <div className="nav-item loggedinuser">
        <Link to="/login">
          {!user && <BsPersonExclamation color="white" size="24" />}
          {user && (
            <>
              <BsPersonCheck
                id="loggedinuser"
                color="white"
                size="24"
                // onMouseOver={showLogoutHandler}
              />
            </>
          )}
        </Link>
        {/* <div className="popoverbox">popover content</div> */}
      </div>
      <div className="nav-item">
        <Link to="/cart">
          <Badge id="badge" color="white" size="24px">
            {cartCount}
          </Badge>
          <AiOutlineShoppingCart color="white" size={24} />
        </Link>
      </div>
      <NewSideNav />
    </div>
  );
};

export default BottomNav;
