import { all, takeEvery } from "redux-saga/effects"
import ActionTypesBooking from "../action/actionTypeBooking"
import { handleGetAllListBooking, handleGetOneBooking } from "./bookingSaga"
import handleGetAllFacilitiesSupport from "./facilitiesSupportSaga"
import { handleGetOtherRooms } from "./otherRoomsSage"
import { handleGetCoupons } from "./couponReducer"

function* watchAll() {
  yield all([
    takeEvery(
      ActionTypesBooking.REQ_GET_ALL_LIST_BOOKING,
      handleGetAllListBooking
    ),
    takeEvery(
      ActionTypesBooking.REQ_GET_ALL_FACILITIES_SUPPORT,
      handleGetAllFacilitiesSupport
    ),
    takeEvery(ActionTypesBooking.REQ_GET_ONE_BOOKING, handleGetOneBooking),
    takeEvery(ActionTypesBooking.REQ_GET_OTHER_ROOMS, handleGetOtherRooms),
    takeEvery(ActionTypesBooking.REQ_GET_COUPONS, handleGetCoupons),
  ])
}

export default watchAll
