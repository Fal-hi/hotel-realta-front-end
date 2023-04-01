import ActionTypes from "./actionTypes"

export interface IEmployee {
  search?: string
  page: number
  entry: number
  status?: string
}
interface Iresponse {
  statusCode: number
  message: string | unknown
  data: any
}
export interface IEmployeeUpdate {
  id: number
  data: ICreate
}

export interface ICreate {
  image: any
  general: string
  salary: string
  assigment: string
  shift: string
}

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

export const createEmployee = (payload: ICreate) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_RESPONSE,
    payload,
  }
}
export const createEmployeeResponse = (payload: Iresponse) => {
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
export const updateEmployee = (payload: IEmployeeUpdate) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_RESPONSE,
    payload,
  }
}
export const updateEmployeeResponse = (payload: Iresponse) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_RESPONSE,
    payload,
  }
}

export const getJobRoleOption = () => {
  return {
    type: ActionTypes.GET_EMPLOYEE_FOR_UPDATE,
  }
}
export const getJobRoleOptionResponse = (payload: Iresponse) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_FOR_UPDATE_RESPONSE,
    payload,
  }
}
export const getDepartmentOption = () => {
  return {
    type: ActionTypes.GET_EMPLOYEE_FOR_UPDATE,
  }
}
export const getDepartmentOptionResponse = (payload: Iresponse) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_FOR_UPDATE_RESPONSE,
    payload,
  }
}
export const getUsersForSearchEmployeeOption = (payload: string) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_FOR_UPDATE,
    payload,
  }
}
export const getUsersForSearchEmployeeOptionResponse = (payload: Iresponse) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_FOR_UPDATE_RESPONSE,
    payload,
  }
}
