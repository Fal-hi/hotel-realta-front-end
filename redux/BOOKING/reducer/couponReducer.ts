import ActionTypesBooking from "../action/actionTypeBooking"

const initialState = {
  coupon: {},
  status: false,
  message: "",
}

function couponReducers(state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case ActionTypesBooking.RES_GET_COUPONS:
      return {
        ...state,
        coupon: payload,
        status: true,
        message: "Coupon berhasil di dapatkan",
      }
    default:
      return state
  }
}

export default couponReducers
