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