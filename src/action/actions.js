import axios from 'axios';
import * as type from './type'

export function getCategory(){
    return(dispatch)=>{
        axios.get("http://localhost:8004/").then( (response)=>{
            dispatch(callBackForGetCategory(response.data.categories))
            const temp = response.data.categories
            temp.map( (item, index)=>
                console.log("Hi,in action & function getCategory, ur data are like: "+item.Category)
            )
            // console.log(temp.categories)
        })
    }
}


export function callBackForGetCategory (tempData){
    return {
        type: type.CALL_API_GET_CATEGORY,
        payload: tempData
    }
}



