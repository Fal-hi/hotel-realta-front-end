import { call, put } from "redux-saga/effects"
import ApiMethodFacilites from "../../../api/hotel/facilities"

import {
  doGetFaciByNameResponse,
  doGetFaciResponse,
} from "../action/actionFacilites"

function* handleGetFaci(action) {
  try {
    const result = yield call(ApiMethodFacilites.getfaci, action.payload)
    // console.log("tes" + result)
    yield put(doGetFaciResponse(result.data))
  } catch (error) {
    // console.log(error)
    yield put(doGetFaciResponse(error.response.data))
  }
}

function* handleGetFaciByName(action) {
  try {
    const result = yield call(ApiMethodFacilites.getfaciByName, action.payload)
    // console.log("tes" + result)
    yield put(doGetFaciByNameResponse(result.data))
  } catch (error) {
    // console.log(error)
    yield put(doGetFaciByNameResponse(error.response.data))
  }
}

export { handleGetFaci, handleGetFaciByName }
