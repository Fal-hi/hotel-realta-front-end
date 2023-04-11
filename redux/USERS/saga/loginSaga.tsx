import apiMethodUsers from "../../../api/users/apiusers"
import { call, put } from "redux-saga/effects"
import {
  doLoginFailed,
  doLoginSuccess,
  doLogoutSuccess,
} from "../action/loginAction"

function* handleLoginEmployee(action: any): Generator {
  console.log("tokentes", action.payload)

  try {
    const result: any = yield call(apiMethodUsers.loginEmployee, action.payload)
    localStorage.setItem("token", result.data.token)
    localStorage.setItem("id", result.data.id)

    console.log("testingloginEmployee", result.data)

    if (result.data.statusCode >= 400) {
      return yield put(doLoginFailed(result.data))
    }

    yield put(doLoginSuccess(result.data))
  } catch (e: any) {
    yield put(
      doLoginFailed({
        message: e,
      })
    )
  }
}

function* handleLoginGuest(action: any): Generator {
  try {
    const result: any = yield call(apiMethodUsers.loginGuest, action.payload)

    localStorage.setItem("token", result.data.token)
    localStorage.setItem("id", result.data.id)

    if (result.data.statusCode >= 400) {
      return yield put(doLoginFailed(result.data))
    }

    yield put(doLoginSuccess(result.data))
  } catch (e: any) {
    yield put(
      doLoginFailed({
        message: e,
      })
    )
  }
}

function* handleLogoutEmployee(action: any): Generator {
  try {
    yield put(doLogoutSuccess())
  } catch (e) {
    return e
  }
}

export { handleLoginEmployee, handleLogoutEmployee, handleLoginGuest }
