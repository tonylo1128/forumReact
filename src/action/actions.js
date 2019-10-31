import axios from "axios";
import * as type from "./type";

export function getCategory() {
  return dispatch => {
    return axios.get("http://localhost:8005/").then(response => {
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
  // console.log("-------------------------------------");
  // console.log(inputTemp);
  // console.log("-------------------------------------");
  return {
    type: type.HANDLE_INPUT_OPTION,
    payload: inputTemp
  };
}




export function callApiForGetPost(){
  return dispatch => { 
    return axios.get("http://localhost:8005/getTopic").then( (response)=>{
      console.log(response.data.test)
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
    .delete("http://localhost:8005/dele/"+valuePassToReact)
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
    dispatch( callApiDelePost(inputTemp) ).then( () => dispatch( getCategory() ) )
  }
}

export function handleFileInput(inputTemp){
  return {
    type: type.HANDLE_FILE_INPUT,
    payload: inputTemp
  }
}



export function callApiForCreatePost(input1, input2, input3) {
  
  const fileObj = new FormData();
  fileObj.append('img', input3);
  fileObj.append('topic', input1);
  fileObj.append('catID', input2);
  
  return dispatch => {
    return axios
      .post("http://localhost:8005/postTopic",  fileObj )
      .then(response => {
        dispatch(createPost())
      });
  };
}

export function createPost(returnMsg) {
  return {
    type: type.CALL_API_CREATE_POST,
    payload: returnMsg
  };
}

export function combineCreateAndUpdateFun(input1,input2,input3){
  return dispatch =>{
    dispatch( callApiForCreatePost(input1,input2,input3) ).then( dispatch( getCategory() ) )
  }
}

export function handlePostContent (item){
  return{
    type:type.HANDLE_POST_CONTENT,
    payload: item
  }
}