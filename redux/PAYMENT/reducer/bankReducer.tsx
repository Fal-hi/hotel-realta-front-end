import ActionTypePayment from "../action/actionTypePayment";

const initialState = {
    bank: {},
    refresh: "",
    message:""
  };
export function bankReducers(state = initialState, action:any) {
    let {type, payload}= action;
    switch (type) {
        case ActionTypePayment.GET_BANK_RESPONSE:
            return{...state, bank: payload, refresh: true}
        case ActionTypePayment.CREATE_BANK_RESPONSE:
                return { message: payload.message, refresh: false}
        case ActionTypePayment.UPDATE_BANK_RESPONSE:
                    return { message: payload, refresh: false }
        case ActionTypePayment.DELETE_BANK_RESPONSE:
                return {message: payload.message,refresh: false }
        default:
            return state
    }
}