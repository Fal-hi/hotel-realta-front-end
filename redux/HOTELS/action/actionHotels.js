import ActionTypes from "./actionType"

export const doRequestGetHotels = payload => {
  return {
    type: ActionTypes.REQ_GET_HOTELS,
    payload,
  }
}

export const doGetHotelsResponse = payload => {
  // console.log(payload)
  return {
    type: ActionTypes.GET_HOTELS_RESPONSE,
    payload,
  }
}

export const doRequestGetHotelsByName = payload => {
  // console.log(payload)
  return {
    type: ActionTypes.REQ_GET_HOTELS_BY_NAME,
    payload,
  }
}

export const doRequestGetHotelsByNameResponse = payload => {
  return {
    type: ActionTypes.GET_HOTELS_RESPONSE_BY_NAME,
    payload,
  }
}

export const doAddHotels = payload => {
  return {
    type: ActionTypes.ADD_HOTELS,
    payload,
  }
}

export const doAddHotelsResponse = payload => {
  return {
    type: ActionTypes.ADD_HOTELS_RESPONSE,
    payload,
  }
}

export const doUpdateHotels = payload => {
  return {
    type: ActionTypes.UPDATE_HOTELS,
    payload,
  }
}

export const doUpdateHotelsResponse = payload => {
  return {
    type: ActionTypes.UPDATE_HOTELS_RESPONSE,
    payload,
  }
}

export const doDeleteHotels = payload => {
  return {
    type: ActionTypes.DEL_HOTELS,
    payload,
  }
}

export const doDeleteHotelsResponse = payload => {
  return {
    type: ActionTypes.DEL_HOTELS_RESPONSE,
    payload,
  }
}
