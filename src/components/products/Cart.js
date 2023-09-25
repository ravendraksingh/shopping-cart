import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import ProductInCart from "./ProductInCart";
import { Card, Row, Col } from "react-bootstrap";
import UserContext from "../../context/UserContext";
import "./cart.css";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  console.log("cartCtx", cartCtx);
  //   const { cart } = cartCtx;
  const [cart, setCart] = useState([]);
  const [itemTotal, setItemTotal] = useState(0);
  const [deliveryChrg, setDeliveryChrg] = useState(10);
  const [surgeChrg, setSurgeChrg] = useState(2);

  const user = useContext(UserContext);
  console.log("user", user);

  useEffect(() => {
    if (cartCtx && cartCtx.cart?.length > 0) {
      setCart(cartCtx.cart);
    }
  }, [cartCtx.cart]);

  let cartWithUniqItems = [
    ...new Map(
      cart.map((item) => [
        item["id"],
        { ...item, quantity: item?.quantity ?? 0 + 1 },
      ])
    ).values(),
  ];
  cartWithUniqItems = cartWithUniqItems.sort((a, b) => a.id - b.id);
  //   cartWithUniqItems = cart.sort((a, b) => a.id - b.id);
  console.log("cartWithUniqItems", cartWithUniqItems);

  useEffect(() => {
    if (cart) {
      let _itemTotal = cart.reduce((sum, item) => sum + item.price, 0);
      console.log("itemTotal", _itemTotal);
      setItemTotal(_itemTotal);
    }
  }, [cart]);

  let grandTotal = itemTotal + deliveryChrg + surgeChrg;
  grandTotal = grandTotal.toFixed(2);

  window.onbeforeunload = () => {
    alert("are you sure");
  };

  //   const cart = [
  //     {
  //       id: 2,
  //       title: "iPhone X",
  //       description:
  //         "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  //       price: 899,
  //       discountPercentage: 17.94,
  //       rating: 4.44,
  //       stock: 34,
  //       brand: "Apple",
  //       category: "smartphones",
  //       thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  //       images: [
  //         "https://i.dummyjson.com/data/products/2/1.jpg",
  //         "https://i.dummyjson.com/data/products/2/2.jpg",
  //         "https://i.dummyjson.com/data/products/2/3.jpg",
  //         "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  //       ],
  //     },
  //     {
  //       id: 1,
  //       title: "iPhone 9",
  //       description: "An apple mobile which is nothing like apple",
  //       price: 549,
  //       discountPercentage: 12.96,
  //       rating: 4.69,
  //       stock: 94,
  //       brand: "Apple",
  //       category: "smartphones",
  //       thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //       images: [
  //         "https://i.dummyjson.com/data/products/1/1.jpg",
  //         "https://i.dummyjson.com/data/products/1/2.jpg",
  //         "https://i.dummyjson.com/data/products/1/3.jpg",
  //         "https://i.dummyjson.com/data/products/1/4.jpg",
  //         "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Samsung Universe 9",
  //       description:
  //         "Samsung's new variant which goes beyond Galaxy to the Universe",
  //       price: 1249,
  //       discountPercentage: 15.46,
  //       rating: 4.09,
  //       stock: 36,
  //       brand: "Samsung",
  //       category: "smartphones",
  //       thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  //       images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
  //     },
  //   ];

  //   console.log(JSON.stringify(cart));
  return (
    <div className="container cart__container">
      {(!cart || cart.length === 0) && (
        <h1 className="text-danger">Cart is empty!</h1>
      )}
      {
        cartWithUniqItems &&
          cartWithUniqItems?.length > 0 &&
          // <div className="product__list">
          cartWithUniqItems.map((item, index) => (
            <ProductInCart product={item} key={"alj083y2_" + Math.random()} />
          ))
        // </div>
      }
      {cart && cart.length > 0 && (
        <Card className="mb-2">
          <Card.Header className="fw-bold">Bill Details</Card.Header>
          <Card.Body>
            <Row>
              <Col>Item total</Col>
              <Col className="text-end">{itemTotal?.toFixed(2)}</Col>
            </Row>
            <Row>
              <Col>Delivery charge</Col>
              <Col className="text-end">{deliveryChrg?.toFixed(2)}</Col>
            </Row>
            <Row>
              <Col>High demand surge charge</Col>
              <Col className="text-end">{surgeChrg?.toFixed(2)}</Col>
            </Row>
            <Row className="fw-bold">
              <Col>Grand total</Col>
              <Col className="text-end">${grandTotal}</Col>
            </Row>
          </Card.Body>
        </Card>
      )}
      {cart && cart?.length > 0 && (
        <div className="buybtn__container text-center">
          {/* <span>
            Subtotal <strong>${itemTotal?.toFixed(2)}</strong>
          </span> */}
          <button
            type="button"
            className="btn btn-warning mb-2 btn__buy"
          >{`Proceed to buy (${cart.length} items)`}</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
