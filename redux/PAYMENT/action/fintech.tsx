import ActionTypePayment from "./actionTypePayment"

export const getDataFintech =(payload:any)=>{
    return {
        type: ActionTypePayment.GET_FINTECH,
        payload
    };
};

export const getDataFintechRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.GET_FINTECH_RESPONSE,
        payload
    }
}

export const createDataFintech =(payload:any)=>{
    return {
        type: ActionTypePayment.CREATE_FINTECH,
        payload
    };
};

export const createDataFintechRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.CREATE_FINTECH_RESPONSE,
        payload
    }
}

export const updateDataFintech =(payload:any)=>{
    return {
        type: ActionTypePayment.UPDATE_FINTECH,
        payload
    };
};

export const updateDataFintechRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.UPDATE_FINTECH_RESPONSE,
        payload
    }
}

export const deleteDataFintech =(payload:any)=>{
    return {
        type: ActionTypePayment.DELETE_FINTECH,
        payload
    };
};

export const deleteDataFintechRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.DELETE_FINTECH_RESPONSE,
        payload
    }
}