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
        case ActionTypePayment.CREATE_FINTECH_RESPONSE:
                return { message: payload.message,refresh: false}
        case ActionTypePayment.UPDATE_FINTECH_RESPONSE:
                    return { message: payload, refresh: false }
        case ActionTypePayment.DELETE_FINTECH_RESPONSE:
                return { message: payload.message,refresh: false }
        default:
            return state
    }
}