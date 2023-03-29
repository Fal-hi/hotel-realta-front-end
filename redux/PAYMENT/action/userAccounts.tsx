import ActionTypePayment from "./actionTypePayment"

export const getDataUserAccounts =()=>{
    return {
        type: ActionTypePayment.GET_USER_ACCOUNTS,

    };
};

export const getDataUserAccountsRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.GET_USER_ACCOUNTS_RESPONSE,
        payload
    }
}