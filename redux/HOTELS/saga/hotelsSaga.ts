import { call, put } from "redux-saga/effects"
import ApiMethodHotels from "../../../api/hotel/hotels"

import {
  doAddHotelsResponse,
  doGetHotelsResponse,
  doDeleteHotelsResponse,
  doUpdateHotelsResponse,
} from "../action/actionHotels"

function* handleGetHotels(): any {
  try {
    const result = yield call(ApiMethodHotels.get)
    console.log("tes" + result)
    yield put(doGetHotelsResponse(result.data))
  } catch (error: any) {
    console.log(error)
    yield put(doGetHotelsResponse(error.response.data))
  }
}

function* handleAddHotels(action: any): any {
  try {
    const result = yield call(ApiMethodHotels.create, action.payload)
    yield put(doAddHotelsResponse(result.data))
  } catch (error) {
    console.log(error)
    yield put(doAddHotelsResponse({ message: error }))
  }
}

function* handleUpdateHotels(action: any): any {
  try {
    const result = yield call(ApiMethodHotels.update, action.payload)
    yield put(doUpdateHotelsResponse(result.data))
  } catch (error) {
    console.log(error)
    yield put(doUpdateHotelsResponse({ message: error }))
  }
}

function* handleDelHotels(action: any): any {
  try {
    const result = yield call(ApiMethodHotels.remove, action.payload)

    yield put(doDeleteHotelsResponse(result.data))
  } catch (error) {
    yield put(doDeleteHotelsResponse({ error }))
  }
}

export { handleGetHotels, handleAddHotels, handleUpdateHotels, handleDelHotels }
