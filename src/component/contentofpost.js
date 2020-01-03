import React from "react";
import { Card, Image } from "react-bootstrap";
import * as actions from "../action/actions";
import { connect } from "react-redux";

function contentofpost({ handlePostContent }) {
  
  console.log(handlePostContent);
  return (
    <Card className="bg-dark">
      <Card.Header className="text-light">
        {handlePostContent.catString}
      </Card.Header>
      <Card.Body>
        <Card.Text className="text-light">
          {handlePostContent.content}
        </Card.Text>
        <div className="text-center">
          <Image src={handlePostContent.img} fluid />
        </div>
      </Card.Body>
    </Card>
  );
}

const mapStateToPros = state => ({
  handlePostContent: state.reducer.handlePostContent
});

const mapsStateToAction = dispatch => ({});

export default connect(
  mapStateToPros,
  mapsStateToAction
)(contentofpost);
