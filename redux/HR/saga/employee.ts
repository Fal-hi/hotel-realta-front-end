import employeeApi from "@/api/hr/employeeApi"
import { call, put } from "redux-saga/effects"
import {
  ICreate,
  IEmployee,
  IEmployeeUpdate,
  createEmployeeResponse,
  getDepartmentOptionResponse,
  getEmployeeForUpdateResponse,
  getEmployeeResponse,
  getJobRoleOptionResponse,
  getUsersForSearchEmployeeOptionResponse,
  updateEmployeeResponse,
} from "../action/employee"
import { Iaction } from "./department"

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
    put(createEmployeeResponse(result.data))
  } catch (error) {}
}

function* handlegetEmployeeForUpdate(
  action: IAction
): Generator<any, void, any> {
  try {
    const { id } = action.payload as IEmployeeForUpdate
    const result = yield call(employeeApi.getEmployeeForUpdate, id)
    put(getEmployeeForUpdateResponse(result.data))
  } catch (error) {}
}

function* handleUpdateEmployee(action: IAction): Generator<any, void, any> {
  try {
    const { id, data } = action.payload as IEmployeeUpdate
    const result = yield call(employeeApi.updateEmployee, id, data)
    put(updateEmployeeResponse(result.data))
  } catch (error) {}
}
function* handleGetJobRoleOption(): Generator<any, void, any> {
  try {
    const result = yield call(employeeApi.getJobRoleOption)
    put(getJobRoleOptionResponse(result.data))
  } catch (error) {}
}
function* handleGetDepartmentOption(): Generator<any, void, any> {
  try {
    const result = yield call(employeeApi.getDepartmentOption)
    put(getDepartmentOptionResponse(result.data))
  } catch (error) {}
}

function* handleGetUsersForSearchOptionEmployee(
  action: Iaction
): Generator<any, void, any> {
  try {
    const { search } = action.payload
    const result = yield call(
      employeeApi.getUsersForSearchOptionEmployee,
      search
    )
    put(getUsersForSearchEmployeeOptionResponse(result.data))
  } catch (error) {}
}
export {
  handleGetEmployee,
  handleUpdateEmployee,
  handleCreateEmployee,
  handlegetEmployeeForUpdate,
  handleGetJobRoleOption,
  handleGetUsersForSearchOptionEmployee,
  handleGetDepartmentOption,
}
