import ActionTypes from "../action/actionType"

const initialState = {
  address: [],
  message: "",
  statusResponse: "",
  refresh: "",
  error: "",
}

export function addressReducers(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.GET_ADDRESS_RESPONSE:
      return {
        state,
        address: payload.data,
        refresh: true,
        message: payload.message,
        statusResponse: payload.status,
        error: payload.error ? payload.error : "",
      }
    case ActionTypes.GET_ADDRES_BY_ID_RESPONSE:
      return {
        state,
        address: payload.data,
        refresh: true,
        message: payload.message,
        statusResponse: payload.status,
        error: payload.error ? payload.error : "",
      }
    default:
      return state
  }
}
