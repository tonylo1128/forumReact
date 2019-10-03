import React from "react";
import { Popover, Button, OverlayTrigger, Card } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../action/actions";

function createPost({
  categoryList,
  handleInput,
  inputValue,
  inputOption,
  handleInutOption,
  callApiForCreatePost
}) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Creat a Post</Popover.Title>
      <Popover.Content>
        

      
        <Card.Body>
          
          <Card.Text>
            Post Title
          </Card.Text>
          <input
              type="text"
              onChange={event => handleInput(event.target.value)}
              value={inputValue}
            />

          <Card.Text>
          Belong Categories 
          </Card.Text>
          <select
              onChange={event => handleInutOption(event.target.value)}
              as="select"
            >
              {categoryList.map((item, index) => (
                <option>{item.Category}</option>
              ))}
            </select>
          

          <Button
            onClick={() => callApiForCreatePost(inputValue, inputOption)}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
         
        </Card.Body>
      




          
            {/* <h1>Post Title</h1>
            <input
              type="text"
              onChange={event => handleInput(event.target.value)}
              value={inputValue}
            />
         

          
            <h1>Belong Categories </h1>
            <select
              onChange={event => handleInutOption(event.target.value)}
              as="select"
            >
              {categoryList.map((item, index) => (
                <option>{item.Category}</option>
              ))}
            </select>
          

          <Button
            onClick={() => callApiForCreatePost(inputValue, inputOption)}
            variant="primary"
            type="submit"
          >
            Submit
          </Button> */}
        



      </Popover.Content>
    </Popover>
  );

  const Example = () => (
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
      <Button className="float-right" variant="success">
        Click me to see
      </Button>
    </OverlayTrigger>
  );

  return (
    <div>
      <Example />
    </div>
  );
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
)(createPost);
