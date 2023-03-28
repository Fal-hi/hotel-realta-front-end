import departmentApi from "@/api/hr/departmentApi"
import { call, put } from "redux-saga/effects"
import {
  createDepartmentResponse,
  deleteDepartmentResponse,
  getDepartmentResponse,
  updateDepartmentResponse,
} from "../action/department"
import { Departement } from "../action/departmentDto"

interface IPayload {
  search: string
  page: number
  entry: number
  data: Departement
  name: string
}

export interface Iaction {
  type: string
  payload: IPayload
}

function* handleGetDepartment(action: Iaction): Generator<any, void, any> {
  try {
    const { search, page, entry } = action.payload
    const result = yield call(departmentApi.getDepartment, search, page, entry)

    yield put(getDepartmentResponse(result.data))
  } catch (error) {
    yield put(getDepartmentResponse({ message: error }))
  }
}

function* handleCreateDepartment(action: Iaction): Generator<any, void, any> {
  try {
    const data = action.payload

    const result = yield call(departmentApi.createDepartment, data)

    yield put(createDepartmentResponse(result.data))
  } catch (error) {
    yield put(createDepartmentResponse({ message: error }))
  }
}

function* handleDeleteDepartment(action: any): any {
  try {
    const id = action.payload

    const result = yield call(departmentApi.deleteDepartment, id)

    yield put(deleteDepartmentResponse(result.data))
  } catch (error) {
    yield put(deleteDepartmentResponse({ message: error }))
  }
}

function* handleUpdateDepartment(action: any): any {
  try {
    const { id, data } = action.payload

    const result = yield call(departmentApi.updateDepartment, id, data)
    // console.log(result.data);
    yield put(updateDepartmentResponse(result.data))
  } catch (error) {
    yield put(updateDepartmentResponse({ message: error }))
  }
}

export {
  handleGetDepartment,
  handleCreateDepartment,
  handleDeleteDepartment,
  handleUpdateDepartment,
}
