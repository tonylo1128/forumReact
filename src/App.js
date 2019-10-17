import React, { useEffect } from "react";
import "./App.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import NavbarCom from "./component/NavbarCom";
import ShowDataCard from "./component/ShowDataCard";
import * as actions from "./action/actions";
import { connect } from "react-redux";

function App({ callApiForCategory, callApiForGetPost, returnMsg }) {
  useEffect(() => {
    callApiForCategory();
    callApiForGetPost();
  }, []);
  return (
    // <div className="App" style={{ backgroundColor: "#000000" }}>
    <div className="App" className="bg-dark">
      <Container>
        <Row>
          <Col>
            <NavbarCom />
          </Col>
        </Row>

        <ShowDataCard />
        
      </Container>
      
      
      {/* <Table responsive>
          <tbody>
            <tr>
              <ShowDataCard />
            </tr>
          </tbody>
        </Table> */}
    </div>
  );
}

const mapStateToProps = state => ({
  returnMsg: state.reducer.returnMsg,
});

const mapsStateToAction = dispatch => ({
  callApiForCategory: () => dispatch(actions.getCategory()),
  callApiForGetPost: () => dispatch(actions.callApiForGetPost())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(App);
