import ActionTypes from "./actionType"

export const doRequestGetFaci = payload => {
  return {
    type: ActionTypes.REQ_GET_FACI,
    payload,
  }
}

export const doGetFaciResponse = payload => {
  return {
    type: ActionTypes.GET_FACI_RESPONSE,
    payload,
  }
}

export const doRequestGetFaciByName = payload => {
  return {
    type: ActionTypes.REQ_GET_FACI_BY_NAME,
    payload,
  }
}

export const doGetFaciByNameResponse = payload => {
  return {
    type: ActionTypes.GET_FACI_BY_NAME_RESPONSE,
    payload,
  }
}
