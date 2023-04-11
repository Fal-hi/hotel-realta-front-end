import { all, takeEvery } from "redux-saga/effects"
import ActionTypes from "../action/actionTypes"
import {
  handleCreateDepartment,
  handleDeleteDepartment,
  handleGetDepartment,
  handleUpdateDepartment,
} from "./department"
import {
  handleCreateEmployee,
  handleGetDepartmentOption,
  handleGetEmployee,
  handleGetJobRoleOption,
  handleGetShift,
  handleGetShiftById,
  handleGetUserForProfiles,
  handleGetUsersForSearchOptionEmployee,
  handleUpdateEmployee,
  handlegetEmployeeForUpdate,
} from "./employee"
import {
  handleGetWorkOrder,
  handlecreateWorkOrder,
  handlecreateWorkOrderDetail,
  handlegetEmployeeNameOption,
  handlegetTaskName,
  handlegetWorkOrderDetail,
  handlegetWorkOrderForUpdate,
  handleupdateWorkOrder,
} from "./workorder"

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
    takeEvery(ActionTypes.GET_USERS_FOR_PPROFILES, handleGetUserForProfiles),
    takeEvery(ActionTypes.GET_SHIFT, handleGetShift),
    takeEvery(ActionTypes.GET_SHIFT_BY_ID, handleGetShiftById),
    takeEvery(ActionTypes.CREATE_EMPLOYEE, handleCreateEmployee),
    takeEvery(ActionTypes.GET_WORKORDER, handleGetWorkOrder),
    takeEvery(
      ActionTypes.GET_WORKORDER_FOR_UPDATE,
      handlegetWorkOrderForUpdate
    ),
    takeEvery(ActionTypes.CREATE_WORK_ORDER, handlecreateWorkOrder),
    takeEvery(ActionTypes.UPDATE_WORKORDER, handleupdateWorkOrder),
    takeEvery(ActionTypes.GET_WORKORDER_DETAIL, handlegetWorkOrderDetail),
    takeEvery(ActionTypes.CREATE_WORKORDER_DETAIL, handlecreateWorkOrderDetail),
    takeEvery(
      ActionTypes.GET_EMPLOYEE_NAME_OPTION,
      handlegetEmployeeNameOption
    ),
    takeEvery(ActionTypes.GET_TASK_NAME, handlegetTaskName),
  ])
}

export default watchAll
