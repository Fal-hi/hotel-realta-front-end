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

export const updateDataAccounts=(id:any, data:any)=>{
    const payload ={
        id,
        data
    }
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

export const getDataAccountsFintech =(payload:any)=>{
    return {
        type: ActionTypePayment.GET_ACCOUNTS_FINTECH,
        payload
    };
};

export const getDataAccountsFintechRespons = (payload:any)=>{
    return{
        type: ActionTypePayment.GET_ACCOUNTS_FINTECH_RESPONSE,
        payload
    }
}