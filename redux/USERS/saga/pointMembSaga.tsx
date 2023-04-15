import { get } from "http"
import {
  doGetBonusPoint,
  doGetBonusPointResponse,
} from "../action/generalAction"
import apiMethodUsers from "@/api/users/apiusers"
import { call, put } from "redux-saga/effects"

function* handleGetBonuspoint(action: any): any {
  try {
    console.log(typeof action.payload)
    const response = yield call(apiMethodUsers.pointMember, +action.payload)
    console.log(response.data)
    yield put(doGetBonusPointResponse(response.data))
  } catch (e) {
    yield put(doGetBonusPointResponse({ message: e }))
  }
}

export { handleGetBonuspoint }
