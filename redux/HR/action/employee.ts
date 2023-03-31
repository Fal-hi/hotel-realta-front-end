import ActionTypes from "./actionTypes"

type IEmployee = {
  search?: string
  page: number
  entry: number
  status?: number
}
interface Iresponse {
  statusCode: number
  message: string
  data: any[]
}
interface IEmployeeUpdate {}

export const getEmployee = (payload: IEmployee) => {
  return {
    type: ActionTypes.GET_EMPLOYEE,
    payload,
  }
}
export const getEmployeeResponse = (payload: Iresponse) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_RESPONSE,
    payload,
  }
}

export const getEmployeeForUpdate = (payload: number) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_FOR_UPDATE,
    payload,
  }
}
export const getEmployeeForUpdateResponse = (payload: Iresponse) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_FOR_UPDATE_RESPONSE,
    payload,
  }
}
