import React, { useEffect } from "react";
import "./App.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import * as actions from "./action/actions";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavbarCom from "./component/NavbarCom";
import ShowDataCard from "./component/ShowDataCard";
import Contentofpost from "./component/contentofpost";
import HomeComponent from "./component/HomeComponent";

function App({
  callApiForCategory,
  callApiForGetPost,
  returnMsg,
  handlePostContent
}) {
  useEffect(() => {
    callApiForCategory();
    callApiForGetPost();
  }, []);

  return (
    // <div className="App" style={{ backgroundColor: "#000000" }}>

    <div className="bg-dark">
   
      <Container>
        <Row>
          <Col>
            <NavbarCom />
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <div class="scrollY" style={{ overflowY: "scroll" }}>
              <ShowDataCard />
            </div>
          </Col>

          <Col sm={8}>
            <div class="scrollY" style={{ overflowY: "scroll" }}>
              <BrowserRouter>
                
                    <Route exact path="/" component={HomeComponent}/>
                    <Route path="/post" component={Contentofpost } />
                    <Route path="/SC" component={ShowDataCard } />
                
              </BrowserRouter>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  returnMsg: state.reducer.returnMsg,
  handlePostContent: state.reducer.handlePostContent
});

const mapsStateToAction = dispatch => ({
  callApiForCategory: () => dispatch(actions.getCategory()),
  callApiForGetPost: () => dispatch(actions.callApiForGetPost())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(App);


