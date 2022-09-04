import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../styles.css";

import p1 from "../../public/p1.jpg";
import p2 from "../../public/p2.jpg";
import p3 from "../../public/p3.jpg";

const Product = () => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img style={{ width: "200px" }} variant="top" src={p2} />
        <Card.Body>
          <Card.Text className="product-name">
            Dennis Lingo Men's Slim Fit Casual Shirt{" "}
          </Card.Text>
          <Card.Text className="product-price"> &#8377; 499</Card.Text>
          <hr />
          <div className="d-flex justify-content-between">
            <Button className="product-btn" variant="primary">
              Buy
            </Button>
            <Button className="product-btn" variant="primary">
              Cart
            </Button>
          </div>
        </Card.Body>
        .
      </Card>
    </div>
  );
};

export default Product;
