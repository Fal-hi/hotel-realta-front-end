import ActionTypePayment from "../action/actionTypePayment";

const initialState = {
    bank: [],
    message: "",
    refresh: "",
  };
export function bankReducers(state = initialState, action:any) {
    let {type, payload}= action;
    switch (type) {
        case ActionTypePayment.GET_BANK_RESPONSE:
            return{state, bank: payload, refresh: true}
        default:
            return state
    }
}