import Swal from "sweetalert2"
import ActionTypePayment from "../action/actionTypePayment"

const initialState = {
  transaction: [],
  topup:[],
  message: "",
  refresh: "",
}
export function transactionReducers(state = initialState, action: any) {
  let { type, payload } = action
  switch (type) {
    case ActionTypePayment.GET_TRANSACTION_RESPONSE:
      return {  ...state, transaction: payload, refresh: true }
    case ActionTypePayment.GET_TRANSACTION_TOPUP_RESPONSE:
      return { ...state, topup: payload, refresh: true }
    case ActionTypePayment.CREATE_TRANSACTION_TOPUP_RESPONSE:
      return { ...state,message: payload, refresh: false }
    default:
      return state
  }
}
