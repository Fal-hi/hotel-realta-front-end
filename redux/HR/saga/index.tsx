import { all, takeEvery } from "redux-saga/effects"
import ActionTypes from "../action/actionTypes"
import {
  handleCreateDepartment,
  handleDeleteDepartment,
  handleGetDepartment,
  handleUpdateDepartment,
} from "./department"
import { handleGetEmployee } from "./employee"

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.GET_DEPARTMENT, handleGetDepartment),
    takeEvery(ActionTypes.CREATE_DEPARTMENT, handleCreateDepartment),
    takeEvery(ActionTypes.DELETE_DEPARTMENT, handleDeleteDepartment),
    takeEvery(ActionTypes.UPDATE_DEPARTEMENT, handleUpdateDepartment),
    takeEvery(ActionTypes.GET_EMPLOYEE, handleGetEmployee),
  ])
}

export default watchAll
