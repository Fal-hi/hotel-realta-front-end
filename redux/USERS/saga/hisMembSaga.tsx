import apiMethodUsers from "../../../api/users/apiusers"
import { call, put } from "redux-saga/effects"
import { doGetHistoryMemberResponse } from "../action/generalAction"

function* handleGetHistoryMember(action: any): any {
  console.log(action.payload)
  try {
    const response = yield call(
      apiMethodUsers.historyMember,
      +action.payload
    )
    yield put(doGetHistoryMemberResponse(response.data))
  } catch (e) {
    yield put(doGetHistoryMemberResponse({ message: e }))
  }
}

export { handleGetHistoryMember }
