import ActionTypes from "../action/actionType"

const initialState = {
  hotels: [],
  message: "",
  refresh: "",
  error: "",
}

export function hotelsReducers(state = initialState, action) {
  const { type, payload } = action
  console.log(payload)
  switch (type) {
    case ActionTypes.GET_HOTELS_RESPONSE:
      return {
        state,
        hotels: payload.data,
        refresh: true,
        message: payload.message,
        error: payload.error ? payload.error : "",
      }
    case ActionTypes.ADD_HOTELS_RESPONSE:
      return { message: payload.message, refresh: false }
    case ActionTypes.UPDATE_HOTELS_RESPONSE:
      return { message: payload.message, refresh: false }
    case ActionTypes.DEL_HOTELS_RESPONSE:
      return {
        state,
        hotels: state.hotels.filter(hotel => hotel.id !== payload.id),
      }
    default:
      return state
  }
}
