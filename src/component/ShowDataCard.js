import React, { useEffect } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import * as actions from "../action/actions";
import { connect } from "react-redux";

function ShowDataCard({ categoryList, callApiForCategory,inputValue, inputOption }) {
  // useEffect(() => {
  //   callApiForCategory();
  // }, []);
  console.log(categoryList);
  return (
    <div>
      <Row>
        {categoryList.map((item, index) => (
          <Col>
            <Card border="danger" style={{ width: "18rem" }}>
              <Card.Header>{item.Category}</Card.Header>
              <Card.Body>
                <Button variant="primary">Go !</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h1>借泥做個test之依個係，{inputValue}，另一個係{inputOption}</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  categoryList: state.reducer.categoryList,
  inputValue: state.reducer.inputValue,
  inputOption: state.reducer.inputOption
});

const mapsStateToAction = dispatch => ({
  callApiForCategory: () => dispatch(actions.getCategory())
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(ShowDataCard);
