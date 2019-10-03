import React, {useEffect}from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import NavbarCom from "./component/NavbarCom";
import ShowDataCard from "./component/ShowDataCard";
import * as actions from "./action/actions";
import {connect} from "react-redux";

function App({callApiForCategory}) {
  useEffect(() => {
    callApiForCategory();
  }, []);
  return (
    <div className="App">
      <Container>
      <Row>
        <Col>
          <NavbarCom />
        </Col>
      </Row>
        <ShowDataCard/>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({

});

const mapsStateToAction = dispatch => ({
  callApiForCategory: () => dispatch(actions.getCategory())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(App);


