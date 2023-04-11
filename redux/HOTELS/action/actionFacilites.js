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

export const doAddFaci = payload => {
  return {
    type: ActionTypes.ADD_FACI,
    payload,
  }
}

export const doAddFaciResponse = payload => {
  return {
    type: ActionTypes.ADD_FACI_RESPONSE,
    payload,
  }
}

export const doUpdateFaci = payload => {
  return {
    type: ActionTypes.UPDATE_FACI,
    payload,
  }
}

export const doUpdateFaciResponse = payload => {
  return {
    type: ActionTypes.UPDATE_FACI_RESPONSE,
    payload,
  }
}
