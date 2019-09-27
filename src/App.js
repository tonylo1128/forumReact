import React from "react";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import NavbarCom from './component/NavbarCom';
import ShowDataCard from "./component/ShowDataCard";

function App() {
 
  return (
    <div className="App">
      <Container>
        <NavbarCom/>
        <Row className="justify-content-md-center">
       <ShowDataCard/> 
        </Row>
      </Container>
    </div>
  );
}

export default App;
