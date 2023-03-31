import ActionTypes from "./actionType"

export const doRequestGetAddress = payload => {
  return {
    type: ActionTypes.REQ_GET_ADDRESS,
    payload,
  }
}

export const doGetAddressResponse = payload => {
  return {
    type: ActionTypes.GET_ADDRESS_RESPONSE,
    payload,
  }
}
export const doRequestGetAddressById = payload => {
  return {
    type: ActionTypes.REQ_GET_ADDRES_BY_ID,
    payload,
  }
}

export const doGetAddressByIdResponse = payload => {
  return {
    type: ActionTypes.GET_ADDRES_BY_ID_RESPONSE,
    payload,
  }
}
