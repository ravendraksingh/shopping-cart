import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BiSolidStar } from "react-icons";
import RatingStars from "./RatingStars";

const Product = ({ product }) => {
  console.log(product);
  return (
    // <Card className="product__card col-12 col-sm-6 col-md-4">
    <Card className="product__card">
      <Card.Img src={product.thumbnail} className="product__img" />
      <Card.Body>
        <Row>
          <Col className="px-0 py-0">{product.title}</Col>
        </Row>
        <Row>
          <Col>
            <RatingStars rating={product.rating} />
          </Col>
          <Col className="px-0 py-0">{"$" + product.price}</Col>
        </Row>
      </Card.Body>
      <button className="btn btn-primary btn-sm mb-3 mx-2">Add to cart</button>
    </Card>
  );
};

export default Product;
