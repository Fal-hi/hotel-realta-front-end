import apiMethodUsers from "@/api/users/apiusers"
import { call, put } from "redux-saga/effects"
import {
  doUpdatePassword,
  doUpdatePasswordSuccess,
  doUpdatePasswordFailed,
} from "../action/passwordAction"

function* handleUpdatePassword(action: any): Generator {
  try {
    const result: any = yield call(
      apiMethodUsers.passwordUpdate,
      action.payload.id,
      action.payload.data
    )

    if (result.data.statusCode >= 400) {
      return yield put(doUpdatePasswordFailed(result.data))
    }

    yield put(doUpdatePasswordSuccess(result.data))
  } catch (e) {
    yield put(
      doUpdatePasswordFailed({
        message: e,
      })
    )
  }
}

export { handleUpdatePassword }
