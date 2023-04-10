import ActionTypes from "../action/actionType"

const initialState = {
  facilities: [],
  totalPagination: 0,
  page_size: 0,
  total: 0,
  message: "",
  refresh: false,
  error: false,
  status: "",
}

export function facilitiesReducers(state = initialState, action) {
  const { type, payload } = action
  console.log(payload)
  switch (type) {
    case ActionTypes.GET_FACI_RESPONSE:
      return {
        state,
        facilities: payload.data,
        refresh: true,
        total: payload.data[0].total_rows,
        page_size: payload.page_size,
        totalPagination: Math.ceil(
          parseInt(payload.data[0].total_rows) / payload.page_size
        ),

        status: payload.status,
        message: payload.message,
        statusResponse: payload.status,
        error: payload.error ? payload.error : "",
      }
    case ActionTypes.GET_FACI_BY_NAME_RESPONSE:
      return {
        state,
        facilities: payload.data,
        total: payload.data[0].total_rows,
        page_size: payload.page_size,
        refresh: true,
        totalPagination: Math.ceil(
          parseInt(payload.data[0].total_rows) / payload.page_size
        ),

        status: payload.status,
        message: payload.message,
        statusResponse: payload.status,
        error: payload.error ? payload.error : "",
      }

    default:
      return state
  }
}
