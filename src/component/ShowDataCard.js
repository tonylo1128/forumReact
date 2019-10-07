import React, { useEffect } from "react";
import { Card, Col, Row, Button, tbody } from "react-bootstrap";
import * as actions from "../action/actions";
import { connect } from "react-redux";

function ShowDataCard({
  categoryList,
  callApiForCategory,
  inputValue,
  inputOption,
  topicList,
  callApiDelePost,
  delePostAndUpdate
}) {
  // useEffect(() => {
  //   callApiForCategory();
  // }, []);
  console.log(categoryList);
  return (
    <Row>
      {topicList.map((item, index) => (
        <Col>
          <div className="m-3">
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Header className="" >
                ID: {item.id} , CID: {item.categoryId}

                <button onClick={()=>delePostAndUpdate(item.id)} type="button" class="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                
              </Card.Header>
              <Card.Body>
                <Card.Text>{item.content}</Card.Text>
               
                  <Button variant="primary">Go !</Button>
                  <Button variant="info">Update</Button>
                
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}

      {console.log(topicList)}
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
  callApiDelePost: (inputTemp)=>dispatch(actions.callApiDelePost(inputTemp)),
  delePostAndUpdate : (inputTemp)=>dispatch(actions.delePostAndUpdate(inputTemp))
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(ShowDataCard);
