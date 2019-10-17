import axios from "axios";
import * as type from "./type";
import { async } from "q";

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
  return {
    type: type.HANDLE_INPUT_OPTION,
    payload: inputTemp
  };
}




export function callApiForGetPost(){
  return dispatch => { 
    return axios.get("http://localhost:8005/getTopic").then( (response)=>{
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

// export function combine_FinishEdit_CallApiForData(item, temp){
//   return dispatch=>{
//       dispatch(callApiForEdit(item, temp)).then( dispatch(callApi() ) )
//   }
// }


// Upload File Function
// export function callApiForFilUpload(input){
//   console.log("LETMESEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
//    return dispatch =>{
//      return axios.post(("http://localhost:8005/fileUpload"),  input, {
//        headers:{
//          'Content-Type': 'multipart/form-data'
//        }
//      })
//    }
// }

export async function callApiForCreatePost(input1, input2, input3) {
  
  
  const reactGetInputValue = { input1, input2 };
  const fileObj = new FormData();
  fileObj.append('file', input3);
  console.log("屌on99999999" + input1 + "2......" + input2+ "3......"+input3);
  
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};

// const config = {
//   headers: {
//       'content-type': false,
//       'process-data': false
//   }
// };
  
  return dispatch => {
    return axios
      .post("http://localhost:8005/postTopic", { fileObj }, config)
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