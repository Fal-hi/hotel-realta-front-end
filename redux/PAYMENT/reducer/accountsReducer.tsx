import ActionTypePayment from "../action/actionTypePayment";

const initialState = {
    accounts: [],
    userfintech:[],
    message: "",
    refresh: "",
  };
export function accountReducers(state = initialState, action:any) {
    let {type, payload}= action;
    switch (type) {
        case ActionTypePayment.GET_USER_ACCOUNTS_RESPONSE:
            return{...state, accounts: payload, refresh: true}
        case ActionTypePayment.GET_ACCOUNTS_FINTECH_RESPONSE:
                return{...state, userfintech: payload, refresh: true}
        case ActionTypePayment.CREATE_USER_ACCOUNTS_RESPONSE:
                return {message: payload, refresh: false}
        case ActionTypePayment.UPDATE_USER_ACCOUNTS_RESPONSE:
                    return { message: payload, refresh: false }
        case ActionTypePayment.DELETE_USER_ACCOUNTS_RESPONSE:
                return { message: payload, refresh: false }
        default:
            return state
    }
}