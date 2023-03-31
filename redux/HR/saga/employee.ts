import employeeApi from "@/api/hr/employeeApi"
import { call, put } from "redux-saga/effects"
import { getEmployeeResponse } from "../action/employee"

interface IAction {
  type: string
  payload: any
}
function* handleGetEmployee(action: IAction): Generator<any, void, any> {
  try {
    const { page, entry, search, status } = action.payload
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

export { handleGetEmployee }
