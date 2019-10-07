import axios from "axios";
import * as type from "./type";

export function getCategory() {
  return dispatch => {
    return axios.get("http://localhost:8004/").then(response => {
      dispatch(callBackForGetCategory(response.data.categories));
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
    return axios
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


export function callApiForGetPost(){
  return dispatch => { 
    return axios.get("http://localhost:8004/getTopic").then( (response)=>{
    dispatch(getPost(response.data.post))
  })}
  
}

export function getPost(temp){
  return{
    type: type.CALL_API_GET_POST,
    payload: temp
  }
}

export function callApiDelePost(inputTemp){
  console.log("Here is callApiDelepost and the input is "+inputTemp)
  let valuePassToReact = inputTemp;
  return dispatch => {
    return axios
    .delete("http://localhost:8004/dele/"+valuePassToReact)
    .then((response)=>{
      dispatch(callBackForDelePost(response.data))
    })
  }
}

export function callBackForDelePost(result){
  return{
    type:type.CALL_API_DELE_POST,
    payload:result
  }
}

export function delePostAndUpdate(inputTemp){
  return dispatch => {
    dispatch( callApiDelePost(inputTemp) ).then( dispatch( getCategory() ) )
  }
}

// export function combine_FinishEdit_CallApiForData(item, temp){
//   return dispatch=>{
//       dispatch(callApiForEdit(item, temp)).then( dispatch(callApi() ) )
//   }
// }



