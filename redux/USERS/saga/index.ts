import { all, takeEvery } from "redux-saga/effects"
import ActionTypesUsers from "../action/actionTypeUsers"
import {
  handleLoginEmployee,
  handleLoginGuest,
  handleLogoutEmployee,
} from "./loginSaga"

import { handleRegisterEmployee, handleRegisterGuest } from "./regSaga"
import { handleGetBonuspoint } from "./pointMembSaga"
import { handleGetHistoryMember } from "./hisMembSaga"
import { handleGetUsers, handleUpdateGeneral } from "./generalSaga"
import { handleUpdatePassword } from "./passwordSaga"

function* watchAll() {
  yield all([
    takeEvery(ActionTypesUsers.REQ_GET_LOGIN, handleLoginEmployee),
    takeEvery(ActionTypesUsers.REQ_LOGIN_GUEST, handleLoginGuest),
    takeEvery(ActionTypesUsers.REQ_LOGOUT, handleLogoutEmployee),
    takeEvery(ActionTypesUsers.REQ_REGISTER, handleRegisterEmployee),
    takeEvery(ActionTypesUsers.REQ_REGISTER_GUEST, handleRegisterGuest),
    takeEvery(ActionTypesUsers.GET_HISTORY_MEMBER, handleGetHistoryMember),
    takeEvery(ActionTypesUsers.GET_BONUS_POINT, handleGetBonuspoint),
    takeEvery(ActionTypesUsers.UPDATE_GENERAL_MEMBER, handleUpdateGeneral),
    takeEvery(ActionTypesUsers.UPDATE_PASSWORD, handleUpdatePassword),
    takeEvery(ActionTypesUsers.GET_USERS, handleGetUsers),
  ])
}

export default watchAll
