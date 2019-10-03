import axios from "axios";
import * as type from "./type";

export function getCategory() {
  return dispatch => {
    axios.get("http://localhost:8004/").then(response => {
      dispatch(callBackForGetCategory(response.data.categories));
      const temp = response.data.categories;

      // console.log(temp.categories)
    });
  };
}

export function callBackForGetCategory(tempData) {
  return {
    type: type.CALL_API_GET_CATEGORY,
    payload: tempData
  };
}

export function handleInput(inputTemp) {
  return {
    type: type.HANDLE_INPUT,
    payload: inputTemp
  };
}

export function handleInutOption(inputTemp) {
  return {
    type: type.HANDLE_INPUT_OPTION,
    payload: inputTemp
  };
}

export function callApiForCreatePost(input1, input2) {
  const reactGetInputValue = { input1, input2 };
  // const reactGetInputValue="Captain America"
  console.log("屌on99999999" + input1 + "2......" + input2);
  return dispatch => {
    axios
      .post("http://localhost:8004/postTopic", { reactGetInputValue })
      .then(response => {
        dispatch(createPost());
      });
  };
}

export function createPost(returnMsg) {
  return {
    type: type.CALL_API_CREATE_POST,
    payload: returnMsg
  };
}
