import { call, put } from "redux-saga/effects"
import ApiMethodFacilites from "../../../api/hotel/facilities"

import {
  doGetFaciByNameResponse,
  doGetFaciResponse,
  doAddFaciResponse,
  doUpdateFaci,
  doUpdateFaciResponse,
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

function* handleAddFacility(action) {
  // console.log(action)
  try {
    const result = yield call(ApiMethodFacilites.createFaci, action.payload)

    yield put(doAddFaciResponse(result))
  } catch (error) {
    yield put(doAddFaciResponse(error))
  }
}

function* handleUpdateFacility(action) {
  try {
    const result = yield call(ApiMethodFacilites.updateFaci, action.payload)

    yield put(doUpdateFaciResponse(result.data))
  } catch (error) {
    yield put(doUpdateFaciResponse(error))
  }
}

export {
  handleGetFaci,
  handleGetFaciByName,
  handleAddFacility,
  handleUpdateFacility,
}
