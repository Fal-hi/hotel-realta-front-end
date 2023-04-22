import bookingApi from "@/api/booking/bookingApi"
import { call, put } from "redux-saga/effects"
import { doResponseGetCoupons } from "../action/booking"

function* handleGetCoupons(action: any): any {
  try {
    console.log("action coupon", action)
    const result = yield call(bookingApi.getCoupons, action.payload)
    yield put(doResponseGetCoupons(result.data))
  } catch (error) {
    console.log(error)
  }
}

export { handleGetCoupons }
