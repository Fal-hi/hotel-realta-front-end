import { call, put } from "redux-saga/effects"
import ApiMethodFacyHistory from "../../../api/hotel/facilityPriceHistory"

import {
  doGetFaciHistoryResponse,
  doGetFaciByOrderResponse,
} from "../action/actionFacilityPriceHistory"

function* handleGetFaciHistory(action) {
  try {
    const result = yield call(
      ApiMethodFacyHistory.getfaciHistory,
      action.payload
    )
    // console.log("tes" + result)
    yield put(doGetFaciHistoryResponse(result.data))
  } catch (error) {
    // console.log(error)
    yield put(doGetFaciHistoryResponse(error.response.data))
  }
}

function* handleGetFaciHistoryByOrder(action) {
  try {
    const result = yield call(
      ApiMethodFacyHistory.getfaciHistoryByOrder,
      action.payload
    )
    // console.log("tes" + result)
    yield put(doGetFaciByOrderResponse(result.data))
  } catch (error) {
    // console.log(error)
    yield put(doGetFaciByOrderResponse(error.response.data))
  }
}

export { handleGetFaciHistory, handleGetFaciHistoryByOrder }
