import ActionTypePayment from "./actionTypePayment"

export const getDataTransaction =()=>{
    return {
        type: ActionTypePayment.GET_TRANSACTION,

    };
};

export const getDataTransactionRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.GET_TRANSACTION_RESPONSE,
        payload
    }
}