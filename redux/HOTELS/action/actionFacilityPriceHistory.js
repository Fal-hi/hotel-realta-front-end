import ActionTypes from "./actionType"

export const doRequestGetFaciHistory = payload => {
  return {
    type: ActionTypes.REQ_GET_FACI_HISTORY,
    payload,
  }
}

export const doGetFaciHistoryResponse = payload => {
  return {
    type: ActionTypes.GET_FACI_HISTORY_RESPONSE,
    payload,
  }
}

export const doRequestGetFaciByOrder = payload => {
  return {
    type: ActionTypes.REQ_GET_FACI_HISTORY_BY_ORDER,
    payload,
  }
}

export const doGetFaciByOrderResponse = payload => {
  return {
    type: ActionTypes.GET_FACI_HISTORY_BY_ORDER_RESPONSE,
    payload,
  }
}
