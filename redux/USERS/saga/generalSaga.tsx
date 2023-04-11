import apiMethodUsers from "@/api/users/apiusers"
import {
  doGetUsers,
  doGetUsersResponse,
  doReqUpdateEditGeneral,
  doReqUpdateEditGeneralResponse,
} from "../action/generalAction"
import { call, put } from "redux-saga/effects"

function* handleUpdateGeneral(action: any): any {
  try {
    const response = yield call(
      apiMethodUsers.updateGeneral,
      action.payload.id,
    )
    yield put(doReqUpdateEditGeneral(response.data))
  } catch (e) {
    yield put(doReqUpdateEditGeneralResponse({ message: e }))
  }
}
function* handleGetUsers(action: any): any {
 console.log(action)
  try {
    const response = yield call(apiMethodUsers.GetUsersById,
      action.payload
    )
    yield put(doGetUsersResponse(response.data))
  } catch (e) {
    yield put(doGetUsersResponse({ message: e }))
  }
}

export { handleUpdateGeneral, handleGetUsers }
