import React, { Component } from "react";
import { Popover, Button, OverlayTrigger, Card, Form } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../action/actions";

class CreatePost extends Component {
  render() {
    const {
      categoryList,
      handleInput,
      inputValue,
      inputOption,
      handleInutOption,
      callApiForCreatePost
    } = this.props;
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Creat a Post</Popover.Title>
        <Popover.Content>
          <Form.Group>
            <Form.Label>Post Title</Form.Label>
            <Form.Control
              type="text"
              onChange={event => handleInput(event.target.value)}
              value={inputValue}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Belong Categories </Form.Label>
            <Form.Control
              onChange={event => handleInutOption(event.target.value)}
              as="select"
            >
              {categoryList.map((item, index) => (
                <option>{item.Category}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Button
              onClick={() => callApiForCreatePost(inputValue, inputOption)}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form.Group>
        </Popover.Content>
      </Popover>
    );
    return (
      <OverlayTrigger trigger="click" placement="left" overlay={popover}>
        <Button className="float-right" variant="success">
          Create Post Here!
        </Button>
      </OverlayTrigger>
    );
  }
}

const mapStateToProps = state => ({
  categoryList: state.reducer.categoryList,
  inputValue: state.reducer.inputValue,
  inputOption: state.reducer.inputOption
});

const mapsStateToAction = dispatch => ({
  callApiForCategory: () => dispatch(actions.getCategory()),
  handleInput: input => dispatch(actions.handleInput(input)),
  handleInutOption: input => dispatch(actions.handleInutOption(input)),
  callApiForCreatePost: (input1, input2) =>
    dispatch(actions.callApiForCreatePost(input1, input2))
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(CreatePost);
