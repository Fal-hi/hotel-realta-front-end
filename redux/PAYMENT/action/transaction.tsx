import ActionTypePayment from "./actionTypePayment"

export const getDataTransaction =(search: string, page: number, limit: number, type: string)=>{
    const payload = {
        search,
        page,
        limit,
        type
      }
      
    return {
        type: ActionTypePayment.GET_TRANSACTION,
        payload
    };
};

export const getDataTransactionRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.GET_TRANSACTION_RESPONSE,
        payload
    }
}



export const getDataTopUp =(search: string, page: number, limit: number,)=>{
    const payload = {
        search,
        page,
        limit,
      }
    return {
        type: ActionTypePayment.GET_TRANSACTION_TOPUP,
        payload
    };
};

export const getDataTopUpRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.GET_TRANSACTION_TOPUP_RESPONSE,
        payload
    }
}


export const createDataTopUp =(payload:any)=>{
    return {
        type: ActionTypePayment.CREATE_TRANSACTION_TOPUP,
        payload
    };
};

export const createDataTopUpRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.CREATE_TRANSACTION_TOPUP_RESPONSE,
        payload
    }
}