import * as typeForAction from '../action/type'

const initstate={
    categoryList: [
    {
        // catId:0,
        // category:"",
        // createAT:"",
        // lastUpdate:""
    }
],
    topicList:[{

    }],

    createPostTempObj:{
        title:"",
        category:""
    },

    inputValue:"",
    inputOption:"",
    apiCallReturnMsg:"",
    returnMsg:""
}

export default function (state=initstate, {type, payload} ){

    switch (type){
        case typeForAction.CALL_API_GET_CATEGORY:
            
            let temp = payload;
            temp.map((item,index)=> console.log("Here is the item and the index is: "+index+"item: "+item))
            return{
                ...state,  
                categoryList: payload
            }
        case typeForAction.HANDLE_INPUT:
            return {
                ...state,
                inputValue: payload
            }
        case typeForAction.HANDLE_INPUT_OPTION:
            return {
                ...state,
                inputOption: payload
            }
        case typeForAction.CALL_API_CREATE_POST:
            return{
                ...state,
                apiCallReturnMsg: payload
            }
        case typeForAction.CALL_API_GET_POST:
            return{
                ...state,
                topicList: payload
            }
        case typeForAction.CALL_API_DELE_POST:
            return{
                ...state,
                returnMsg:payload
            }

        default:
            return state
    }
}