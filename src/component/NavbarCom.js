import React, { useEffect } from "react";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import capLogo from "../capLogo.png";
import * as actions from "../action/actions";
import { connect } from "react-redux";
import Example from "../component/createPost";
import {Link} from "react-router-dom"



function NavbarCom({ categoryList, callApiForCategory }) {
  // useEffect(() => {

  //   console.log("WTFFFFFFFFFFFF, DID I JUST START AGAIN?");
  //   categoryList.map((item,index)=> console.log(item))

  //   callApiForCategory();
  // }, []);
  return (
    <Navbar bg="" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={capLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <Link to='/'>
          {"Tony's Forum"}
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Nav className="mr-auto">
        <Nav.Link href="/SC">Home</Nav.Link>
        <Nav.Link href="/post">Post</Nav.Link>

  
      
        <Nav.Link> <Link to='/sc'> Home(Testing) </Link> </Nav.Link>
      <Nav.Link> <Link to="/post">Post(Testing)</Link> </Nav.Link>

           
       

        <NavDropdown title="Category" id="basic-nav-dropdown">
          {categoryList.map((item, index) => (
            <NavDropdown.Item href={item.Category}>
              {item.Category}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>

      <div >
        <Example />
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
