import React, { useEffect } from "react";
import { Card, Col, Row, Button, tbody, Image } from "react-bootstrap";
import * as actions from "../action/actions";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";

function ShowDataCard({
  categoryList,
  callApiForCategory,
  inputValue,
  inputOption,
  topicList,
  callApiDelePost,
  delePostAndUpdate,
  handlePostContent
}) {
  return (
    
    <Row>
      {topicList.map((item, index) => (
        <Col>
          <div className="m-3">
            <Card
              className="bg-dark"
              border="primary"
              style={{ width: "18rem" }}
            >
              {item.img !== null ? (
                <Card.Img
                  variant="top"
                  src={item.img}
                  className="mw-100"
                  fluid
                />
              ) : null}

              <Card.Body>
                <Card.Title className="text-light">
                  {item.catString}, ID: {item.id}
                  <button
                    onClick={() => delePostAndUpdate(item.id)}
                    type="button"
                    class="close"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </Card.Title>

                <Card.Text className="text-light">{item.content}</Card.Text>
              </Card.Body>

              <Card.Footer>
                <Row>
                  <Col>




                    
                        <Button
                          onClick={() => handlePostContent(item)}
                          variant="primary"
                        >
                         Go!
                        </Button>
                    



                  </Col>
                  <Col>
                    <Button variant="info">Update</Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </div>
        </Col>
      ))}
    </Row>

  );
}

const mapStateToProps = state => ({
  categoryList: state.reducer.categoryList,
  inputValue: state.reducer.inputValue,
  inputOption: state.reducer.inputOption,
  topicList: state.reducer.topicList
});

const mapsStateToAction = dispatch => ({
  callApiForCategory: () => dispatch(actions.getCategory()),
  callApiForGetPost: () => dispatch(actions.callApiForGetPost()),
  callApiDelePost: inputTemp => dispatch(actions.callApiDelePost(inputTemp)),
  delePostAndUpdate: inputTemp =>
    dispatch(actions.delePostAndUpdate(inputTemp)),
  handlePostContent: item => dispatch(actions.handlePostContent(item))
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(ShowDataCard);
