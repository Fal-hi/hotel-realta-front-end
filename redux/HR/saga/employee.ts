import employeeApi from "@/api/hr/employeeApi"
import { call, put } from "redux-saga/effects"
import {
  ICreate,
  IEmployee,
  IEmployeeUpdate,
  createEmployeeResponse,
  getEmployeeResponse,
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
    console.log("handleGetEmployee  ", result.data)
    yield put(getEmployeeResponse(result.data))
  } catch (error) {}
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
  } catch (error) {}
}

function* handleUpdateEmployee(action: IAction): Generator<any, void, any> {
  try {
    const { id, data } = action.payload as IEmployeeUpdate
  } catch (error) {}
}

export {
  handleGetEmployee,
  handleUpdateEmployee,
  handleCreateEmployee,
  handlegetEmployeeForUpdate,
}
