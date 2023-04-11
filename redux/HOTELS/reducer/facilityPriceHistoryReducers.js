import ActionTypes from "../action/actionType"

const initialState = {
  facyHistory: [],
  totalPagination: 0,
  page_size: 0,
  total: 0,
  message: "",
  refresh: false,
  error: false,
  status: "",
}

export function facilitiesHistoryReducers(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.GET_FACI_HISTORY_RESPONSE:
      return {
        state,
        facyHistory: payload.data,
        refresh: true,
        total: payload.data[0].total_rows,
        page_size: payload.page_size,
        totalPagination: Math.round(
          Math.ceil(parseInt(payload.data[0].total_rows) / payload.page_size)
        ),

        status: payload.status,
        message: payload.message,
        statusResponse: payload.status,
        error: payload.error ? payload.error : "",
      }
    case ActionTypes.GET_FACI_HISTORY_BY_ORDER_RESPONSE:
      return {
        state,
        facyHistory: payload.data,
        total: payload.data[0].total_rows,
        page_size: payload.page_size,
        refresh: true,
        totalPagination: Math.round(
          Math.ceil(parseInt(payload.data[0].total_rows) / payload.page_size)
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
