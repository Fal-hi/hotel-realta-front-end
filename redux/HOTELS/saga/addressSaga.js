import { call, put } from "redux-saga/effects"
import ApiMethodHotels from "../../../api/hotel/hotels"

import {
  doGetAddressByIdResponse,
  doGetAddressResponse,
} from "../action/actionAddress"

function* handleGetAddress(action) {
  try {
    const result = yield call(ApiMethodHotels.searchAddress, action.payload)
    // console.log("tes" + result)
    yield put(doGetAddressResponse(result.data))
  } catch (error) {
    // console.log(error)
    yield put(doGetAddressResponse(error.response.data))
  }
}

function* handleGetAddressById(action) {
  // console.log(action)
  try {
    const result = yield call(ApiMethodHotels.getAddress, action.payload)
    // console.log("tes" + result)
    yield put(doGetAddressByIdResponse(result.data))
  } catch (error) {
    // console.log(error)
    yield put(doGetAddressByIdResponse(error.response.data))
  }
}

export { handleGetAddress, handleGetAddressById }
