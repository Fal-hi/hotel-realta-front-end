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


export const createDataAccounts =(payload:any)=>{
    return {
        type: ActionTypePayment.CREATE_USER_ACCOUNTS,
        payload
    };
};

export const createDataAccountsRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.CREATE_USER_ACCOUNTS_RESPONSE,
        payload
    }
}

export const updateDataAccounts =(payload:any)=>{
    return {
        type: ActionTypePayment.UPDATE_USER_ACCOUNTS,
        payload
    };
};

export const updateDataAccountsRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.UPDATE_USER_ACCOUNTS_RESPONSE,
        payload
    }
}

export const deleteDataAccounts =(payload:any)=>{
    return {
        type: ActionTypePayment.DELETE_USER_ACCOUNTS,
        payload
    };
};

export const deleteDataAccountsRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.DELETE_USER_ACCOUNTS_RESPONSE,
        payload
    }
}