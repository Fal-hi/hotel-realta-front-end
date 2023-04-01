import ActionTypePayment from "./actionTypePayment"

export const getDataBank =(payload:any)=>{
    return {
        type: ActionTypePayment.GET_BANK,
        payload
    };
};

export const getDataBankRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.GET_BANK_RESPONSE,
        payload
    }
}

export const createDataBank =(payload:any)=>{
    return {
        type: ActionTypePayment.CREATE_BANK,
        payload
    };
};

export const createDataBankRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.CREATE_BANK_RESPONSE,
        payload
    }
}

export const updateDataBank =(payload:any)=>{
    return {
        type: ActionTypePayment.UPDATE_BANK,
        payload
    };
};

export const updateDataBankRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.UPDATE_BANK_RESPONSE,
        payload
    }
}

export const deleteDataBank =(payload:any)=>{
    return {
        type: ActionTypePayment.DELETE_BANK,
        payload
    };
};

export const deleteDataBankRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.DELETE_BANK_RESPONSE,
        payload
    }
}