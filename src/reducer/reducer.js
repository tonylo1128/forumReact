import * as typeForAction from '../action/type'

const initstate={
    categoryList: [
    {
        catId:0,
        category:"",
        createAT:"",
        lastUpdate:""
    }
],
    topicList:{
        topicId:0,
        topic:"",
        createAT:"",
        lastUpdate:""
    }
}

export default function (state=initstate, {type, payload} ){

    switch (type){
        case typeForAction.CALL_API_GET_CATEGORY:
            console.log("Here is reducer and the payload is: "+payload)
            let temp = payload;
            temp.map((item,index)=> console.log(item))
            return{
                ...state,  
                categoryList:{payload}
            }


        default:
            return state
    }
}