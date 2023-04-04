import employeeApi from "@/api/hr/employeeApi"
import { call, put } from "redux-saga/effects"
import {
  ICreate,
  IEmployee,
  IEmployeeUpdate,
  createEmployeeResponse,
  geUsersForProfilesResponse,
  getDepartmentOptionResponse,
  getEmployeeForUpdateResponse,
  getEmployeeResponse,
  getJobRoleOptionResponse,
  getShiftByIdResponse,
  getShiftResponse,
  getUsersForSearchEmployeeOptionResponse,
  updateEmployeeResponse,
} from "../action/employee"

interface IEmployeeForUpdate {
  id: number
}

interface IAction {
  type: string
  payload: IEmployee | ICreate | IEmployeeForUpdate | IEmployeeUpdate
}

function* handleGetEmployee(action: IAction): Generator<any, void, any> {
  try {
    const { page, entry, search, status } = action.payload as IEmployee
    const result = yield call(
      employeeApi.getEmployee,
      page,
      entry,
      search,
      status
    )

    yield put(getEmployeeResponse(result.data))
  } catch (error) {
    yield put(
      getEmployeeResponse({ statusCode: 400, message: error, data: [] })
    )
  }
}

function* handleCreateEmployee(action: IAction): Generator<any, void, any> {
  try {
    const { image, general, salary, assigment, shift } =
      action.payload as ICreate
    const data = {
      image,
      general,
      salary,
      assigment,
      shift,
    }
    const result = yield call(employeeApi.createEmployee, data)
    yield put(createEmployeeResponse(result.data))
  } catch (error) {}
}

function* handlegetEmployeeForUpdate(
  action: IAction
): Generator<any, void, any> {
  try {
    const { id } = action.payload as IEmployeeForUpdate
    const result = yield call(employeeApi.getEmployeeForUpdate, id)
    yield put(getEmployeeForUpdateResponse(result.data))
  } catch (error) {}
}

function* handleUpdateEmployee(action: IAction): Generator<any, void, any> {
  try {
    const { id, data } = action.payload as IEmployeeUpdate
    const result = yield call(employeeApi.updateEmployee, id, data)
    yield put(updateEmployeeResponse(result.data))
  } catch (error) {}
}
function* handleGetJobRoleOption(): any {
  try {
    const result = yield call(employeeApi.getJobRoleOption)
    yield put(getJobRoleOptionResponse(result.data))
  } catch (error) {
    yield put(
      getJobRoleOptionResponse({
        statusCode: 400,
        message: error,
        data: [],
      })
    )
  }
}
function* handleGetDepartmentOption(): Generator<any, void, any> {
  try {
    const result = yield call(employeeApi.getDepartmentOption)
    yield put(getDepartmentOptionResponse(result.data))
  } catch (error) {}
}

function* handleGetUsersForSearchOptionEmployee(action: any): any {
  try {
    const result = yield call(
      employeeApi.getUsersForSearchOptionEmployee,
      action.payload
    )
    yield put(getUsersForSearchEmployeeOptionResponse(result.data))
  } catch (error) {
    yield put(
      getUsersForSearchEmployeeOptionResponse({
        statusCode: 400,
        message: error,
        data: [],
      })
    )
  }
}

function* handleGetUserForProfiles(action: any): any {
  try {
    const result = yield call(employeeApi.getUserForProfiles, action.payload)
    yield put(geUsersForProfilesResponse(result.data))
  } catch (error) {}
}
function* handleGetShift(action: any): any {
  try {
    const result = yield call(employeeApi.getShift, action.payload)
    yield put(getShiftResponse(result.data))
  } catch (error) {
    yield put(getShiftResponse({ message: error }))
  }
}
function* handleGetShiftById(action: any): any {
  try {
    const result = yield call(employeeApi.getShiftById, action.payload)

    yield put(getShiftByIdResponse(result.data))
  } catch (error) {
    yield put(getShiftByIdResponse({ message: error }))
  }
}
export {
  handleGetEmployee,
  handleUpdateEmployee,
  handleCreateEmployee,
  handlegetEmployeeForUpdate,
  handleGetJobRoleOption,
  handleGetUsersForSearchOptionEmployee,
  handleGetDepartmentOption,
  handleGetUserForProfiles,
  handleGetShift,
  handleGetShiftById,
}
