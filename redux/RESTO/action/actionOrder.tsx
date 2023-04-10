import ActionTypes from "./actionType";

export const doAddOrderResto = (payload:any)=>{
    return{
        type : ActionTypes.ADD_ORDER,
        payload
    }
}

export const doAddOrderRestoResponse = (payload:any)=>{
    return{
        type : ActionTypes.ADD_ORDER_RESPONSE,
        payload
    }
}