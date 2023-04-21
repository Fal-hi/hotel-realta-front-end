import ActionTypesBooking from "../action/actionTypeBooking"

const initialState = {
  // bookings: [],
  bookings: {},
  status: false,
  message: "",
}

function bookingReducers(state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case ActionTypesBooking.RES_GET_ALL_LIST_BOOKING:
      return {
        ...state,
        bookings: payload,
        status: true,
        message: "Data berhasil di dapatkan",
      }
    case ActionTypesBooking.RES_GET_ONE_BOOKING:
      return {
        ...state,
        bookingDetail: payload,
        status: true,
        message: "Data berhasil di dapatkan",
      }
    default:
      return state
  }
}

export default bookingReducers
