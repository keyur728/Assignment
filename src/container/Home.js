import React from "react";
import Product from "../components/Product";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Tab
} from "react-bootstrap";
import HomeCarousel from "../components/HomeCarousel";
import "../styles.css";

const productData = [{}, {}, {}, {}, {}, {}, {}, {}];

function Home() {
  return (
    <div>
      <HomeCarousel />
      <section style={{ padding: "5rem 0rem" }}>
        <Container>
          <div className="my-4">
            <h1 className="text-center home-title">Featured Products</h1>
            <p className="text-center home-sub-title">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <div>
            <Tab.Container defaultActiveKey="#link1">
              <ListGroup horizontal>
                <ListGroup.Item className="text-center" action href="#link1">
                  Men
                </ListGroup.Item>
                <ListGroup.Item className="text-center" action href="#link2">
                  Women
                </ListGroup.Item>
                <ListGroup.Item className="text-center" action href="#link3">
                  Kids
                </ListGroup.Item>
              </ListGroup>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  <Row className="my-4">
                    {productData.map((data) => (
                      <Col lg={3} xs={12}>
                        <Product />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <Row className="my-4">
                    {productData.map((data) => (
                      <Col lg={3} xs={12}>
                        <Product />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <Row className="my-4">
                    {productData.map((data) => (
                      <Col lg={3} xs={12}>
                        <Product />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
