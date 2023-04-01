import ActionTypePayment from "../action/actionTypePayment";

const initialState = {
    bank: {},
    refresh: "",
  };
export function bankReducers(state = initialState, action:any) {
    let {type, payload}= action;
    console.log("Payload => ",payload)
    switch (type) {
        case ActionTypePayment.GET_BANK_RESPONSE:
            return{...state, bank: payload, refresh: true}
        case ActionTypePayment.CREATE_BANK_RESPONSE:
                return { bank: payload, refresh: false}
        case ActionTypePayment.UPDATE_BANK_RESPONSE:
                    return { bank: payload, refresh: false }
        case ActionTypePayment.DELETE_BANK_RESPONSE:
                return { bank: payload, refresh: true }
        default:
            return state
    }
}