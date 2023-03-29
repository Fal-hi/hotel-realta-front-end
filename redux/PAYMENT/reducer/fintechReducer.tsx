import ActionTypePayment from "../action/actionTypePayment";

const initialState = {
    fint: [],
    message: "",
    refresh: "",
  };
export function fintechReducers(state = initialState, action:any) {
    let {type, payload}= action;
    switch (type) {
        case ActionTypePayment.GET_FINTECH_RESPONSE:
            return{state, fint: payload, refresh: true}
        default:
            return state
    }
}