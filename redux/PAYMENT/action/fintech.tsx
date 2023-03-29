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