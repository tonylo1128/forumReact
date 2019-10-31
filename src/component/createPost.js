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
      callApiForCreatePost,
      combineCreateAndUpdateFun,
      handleFileInput,
      img
    } = this.props;

    // const fileObj = new FormData();
    // fileObj.append('file', img);


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
            <Form.Label>Upload Your Image Here </Form.Label>
            <input type="file" onChange={(event)=>handleFileInput(event.target.files[0])}/>
            {/* {img!=null ? console.log(img):"This is createPost and nth on img"}
            {img!=null ? console.log(img.name):"This is createPost and nth on img's name"} */}
          </Form.Group>

          <Form.Group>

            <Button
              onClick={() => combineCreateAndUpdateFun(inputValue, inputOption, img)}
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
  inputOption: state.reducer.inputOption,
  img: state.reducer.img
});

const mapsStateToAction = dispatch => ({
  callApiForCategory: () => dispatch(actions.getCategory()),
  handleInput: input => dispatch(actions.handleInput(input)),
  handleInutOption: input => dispatch(actions.handleInutOption(input)),
  callApiForCreatePost: (input1, input2, input3) => dispatch(actions.callApiForCreatePost(input1, input2, input3)),
  handleFileInput: input => dispatch( actions.handleFileInput(input) ),
  combineCreateAndUpdateFun: (input1, input2, input3) =>  dispatch( actions.combineCreateAndUpdateFun(input1, input2, input3) )
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(CreatePost);
