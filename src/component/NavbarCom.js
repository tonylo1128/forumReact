import React from "react";
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import capLogo from "../capLogo.png";

function NavbarCom() {
  return (
    
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={capLogo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                {"Tony's Forum"}
              </Navbar.Brand>
  


        <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>

      </Navbar>
  );
}

export default NavbarCom;
