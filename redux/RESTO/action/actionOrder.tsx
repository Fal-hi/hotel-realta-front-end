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
export const doGetOrderResto = (payload:any)=>{
    //  console.log('ini di action===>',payload)
    return{
        type : ActionTypes.GET_ORDER,
        payload
    }
}

export const doGetOrderRestoResponse = (payload:any)=>{
    return{
        type : ActionTypes.GET_ORDER_RESPONSE,
        payload
    }
}