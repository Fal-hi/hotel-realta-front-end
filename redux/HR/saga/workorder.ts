import workOrderApi from "@/api/hr/workOrderApi"
import { call, put } from "redux-saga/effects"
import {
  createWorkOrderDetailResponse,
  createWorkOrderResponse,
  getEmployeeNameOptionResponse,
  getTaskNameResponse,
  getWorkOrderDetailResponse,
  getWorkOrderForUpdateResponse,
  getWorkOrderResponse,
  updateWorkOrderResponse,
} from "../action/workorder"

function* handleGetWorkOrder(action: any): any {
  try {
    const { page, entry, status, from, to } = action.payload

    const result = yield call(
      workOrderApi.getWorkOrder,
      page,
      entry,
      status,
      from,
      to
    )
    yield put(getWorkOrderResponse(result.data))
  } catch (error) {
    yield put(getWorkOrderResponse({ message: error }))
  }
}
function* handlegetWorkOrderForUpdate(action: any): any {
  try {
    const { id } = action.payload
    const result = yield call(workOrderApi.getWorkOrderForUpdate, id)

    yield put(getWorkOrderForUpdateResponse(result.data))
  } catch (error) {
    yield put(getWorkOrderForUpdateResponse({ message: error }))
  }
}
function* handlecreateWorkOrder(action: any): any {
  try {
    const result = yield call(workOrderApi.createWorkOrder, action.payload)

    yield put(createWorkOrderDetailResponse(result.data))
  } catch (error) {
    yield put(createWorkOrderResponse({ message: error }))
  }
}
function* handleupdateWorkOrder(action: any): any {
  try {
    const { id, data } = action.payload
    const result = yield call(workOrderApi.updateWorkOrder, id, data)

    yield put(updateWorkOrderResponse(result.data))
  } catch (error) {
    yield put(updateWorkOrderResponse({ meesage: error }))
  }
}
function* handlegetWorkOrderDetail(action: any): any {
  try {
    const { id } = action.payload
    const result = yield call(workOrderApi.getWorkOrderDetail, id)

    yield put(getWorkOrderDetailResponse(result.data))
  } catch (error) {
    yield put(getWorkOrderDetailResponse({ message: error }))
  }
}
function* handlecreateWorkOrderDetail(action: any): any {
  try {
    const { data } = action.payload
    const result = yield call(workOrderApi.createWorkOrderDetail, data)

    yield put(createWorkOrderDetailResponse(result.data))
  } catch (error) {
    yield put(createWorkOrderDetailResponse({ message: error }))
  }
}
function* handlegetEmployeeNameOption(action: any): any {
  try {
    const { nameLike } = action.payload
    const result = yield call(workOrderApi.getEmployeeNameOption, nameLike)

    yield put(getEmployeeNameOptionResponse(result.data))
  } catch (error) {
    yield put(getEmployeeNameOptionResponse({ message: error }))
  }
}
function* handlegetTaskName(action: any): any {
  try {
    const { tasklike } = action.payload
    const result = yield call(workOrderApi.getTaskName, tasklike)

    yield put(getTaskNameResponse(result.data))
  } catch (error) {
    yield put(getTaskNameResponse({ message: error }))
  }
}

export {
  handleGetWorkOrder,
  handlegetWorkOrderForUpdate,
  handlegetTaskName,
  handlegetEmployeeNameOption,
  handlecreateWorkOrderDetail,
  handlegetWorkOrderDetail,
  handlecreateWorkOrder,
  handleupdateWorkOrder,
}
