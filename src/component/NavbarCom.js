import React, { useEffect } from "react";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import capLogo from "../capLogo.png";
import * as actions from "../action/actions";
import { connect } from "react-redux";
import Example from "../component/createPost";

function NavbarCom({ categoryList, callApiForCategory }) {
  // useEffect(() => {
    
  //   console.log("WTFFFFFFFFFFFF, DID I JUST START AGAIN?");
  //   categoryList.map((item,index)=> console.log(item))
   
  //   callApiForCategory();
  // }, []);
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

        <NavDropdown title="Category" id="basic-nav-dropdown">
          {categoryList.map((item, index) => (
            <NavDropdown.Item href={item.Category}>
              {item.Category}
            </NavDropdown.Item>
          ))}
        </NavDropdown>


        
      </Nav>

      <div >
          <Example className="mr-sm-2"/>
        </div>

    </Navbar>
  );
}

const mapStateToProps = state => ({
  categoryList: state.reducer.categoryList
});

const mapsStateToAction = dispatch => ({
  callApiForCategory: () => dispatch(actions.getCategory())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(NavbarCom);
