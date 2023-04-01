import { all, takeEvery } from "redux-saga/effects"
import ActionTypes from "../action/actionTypes"
import {
  handleCreateDepartment,
  handleDeleteDepartment,
  handleGetDepartment,
  handleUpdateDepartment,
} from "./department"
import {
  handleGetDepartmentOption,
  handleGetEmployee,
  handleGetJobRoleOption,
  handleGetUsersForSearchOptionEmployee,
  handleUpdateEmployee,
  handlegetEmployeeForUpdate,
} from "./employee"

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.GET_DEPARTMENT, handleGetDepartment),
    takeEvery(ActionTypes.CREATE_DEPARTMENT, handleCreateDepartment),
    takeEvery(ActionTypes.DELETE_DEPARTMENT, handleDeleteDepartment),
    takeEvery(ActionTypes.UPDATE_DEPARTEMENT, handleUpdateDepartment),
    takeEvery(ActionTypes.GET_EMPLOYEE, handleGetEmployee),
    takeEvery(ActionTypes.GET_EMPLOYEE_FOR_UPDATE, handlegetEmployeeForUpdate),
    takeEvery(ActionTypes.UPDATE_EMPLOYEE, handleUpdateEmployee),
    takeEvery(ActionTypes.GET_JOB_ROLE_OPTION, handleGetJobRoleOption),
    takeEvery(ActionTypes.GET_DEPARTMENT_OPTION, handleGetDepartmentOption),
    takeEvery(
      ActionTypes.GET_USERS_FOR_SEARCH_OPTION_EMPLOYEE,
      handleGetUsersForSearchOptionEmployee
    ),
  ])
}

export default watchAll
