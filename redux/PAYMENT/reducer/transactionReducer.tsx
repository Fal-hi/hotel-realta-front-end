import ActionTypePayment from "../action/actionTypePayment";

const initialState = {
    transaction: [],
    message: "",
    refresh: "",
  };
export function transactionReducers(state = initialState, action:any) {
    let {type, payload}= action;
    switch (type) {
        case ActionTypePayment.GET_TRANSACTION_RESPONSE:
            return{state, transaction: payload, refresh: true}
        default:
            return state
    }
}