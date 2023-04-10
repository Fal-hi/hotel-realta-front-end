import ActionTypes from "../action/actionType"

const initialState = {
  hotels: [],
  totalPagination: 0,
  page_size: 0,
  total: 0,
  message: "",
  refresh: false,
  error: false,
  status: "",
}

export function hotelsReducers(state = initialState, action) {
  const { type, payload } = action
  // console.log(payload)
  switch (type) {
    case ActionTypes.GET_HOTELS_RESPONSE:
      return {
        state,
        hotels: payload.data,
        refresh: true,
        total: payload.data[0].total_rows,
        page_size: payload.page_size,
        totalPagination: Math.ceil(
          parseInt(payload.data[0].total_rows) / payload.page_size
        ),
        message: payload.message,
        error: payload.error ? payload.error : "",
      }
    case ActionTypes.GET_HOTELS_RESPONSE_BY_ID:
      return {
        state,
        hotels: payload.data,
        total: payload.data[0].total_rows,
        page_size: payload.page_size,
        refresh: true,
        message: payload.message,
        error: payload.error ? payload.error : "",
      }
    case ActionTypes.GET_HOTELS_RESPONSE_BY_NAME:
      return {
        state,
        hotels: payload.data,
        total: payload.data[0].total_rows,
        page_size: payload.page_size,
        refresh: true,
        totalPagination: Math.ceil(
          parseInt(payload.data[0].total_rows) / payload.page_size
        ),
        message: payload.message,
        error: payload.error ? payload.error : "",
        status: payload.status,
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
