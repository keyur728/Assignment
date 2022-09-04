import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles.css";
import { Link } from "react-router-dom";
function NavBarComponent() {
  return (
    <div>
      <Navbar expand="lg" bg="light" variant="light">
        <Container className="my-2" variant="success">
          <Navbar.Brand href="#home">Keyur</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#features">
                <Link to="/">Home</Link>
              </Nav.Link>

              <Nav.Link href="#pricing">
                {" "}
                <Link to="/shop">Shop</Link>
              </Nav.Link>
              <Nav.Link href="#deets">
                {" "}
                <Link to="/cart">Cart</Link>
              </Nav.Link>
              <Nav.Link href="#deets">Wish List</Nav.Link>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link href="#deets">Login / Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBarComponent;
