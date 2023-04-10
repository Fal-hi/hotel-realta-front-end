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

export const createEmployee = (payload: any) => {
  return {
    type: ActionTypes.CREATE_EMPLOYEE,
    payload,
  }
}
export const createEmployeeResponse = (payload: Iresponse) => {
  return {
    type: ActionTypes.CREATE_EMPLOYEE_RESPONSE,
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
    type: ActionTypes.GET_JOB_ROLE_OPTION,
  }
}
export const getJobRoleOptionResponse = (payload: Iresponse) => {
  return {
    type: ActionTypes.GET_JOB_ROLE_OPTION_RESPONSE,
    payload,
  }
}
export const getDepartmentOption = () => {
  return {
    type: ActionTypes.GET_DEPARTMENT_OPTION,
  }
}
export const getDepartmentOptionResponse = (payload: Iresponse) => {
  return {
    type: ActionTypes.GET_DEPARTMENT_OPTION_RESPONSE,
    payload,
  }
}
export const getUsersForSearchEmployeeOption = (payload: string) => {
  return {
    type: ActionTypes.GET_USERS_FOR_SEARCH_OPTION_EMPLOYEE,
    payload,
  }
}
export const getUsersForSearchEmployeeOptionResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_USERS_FOR_SEARCH_OPTION_EMPLOYEE_RESPONSE,
    payload,
  }
}

export const geUsersForProfiles = (payload: number) => {
  return {
    type: ActionTypes.GET_USERS_FOR_PPROFILES,
    payload,
  }
}
export const geUsersForProfilesResponse = (payload: string) => {
  return {
    type: ActionTypes.GET_USERS_FOR_PPROFILES_RESPONSE,
    payload,
  }
}

export const getShift = (payload: string) => {
  return {
    type: ActionTypes.GET_SHIFT,
    payload,
  }
}
export const getShiftResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_SHIFT_RESPONSE,
    payload,
  }
}
export const getShiftById = (payload: number) => {
  return {
    type: ActionTypes.GET_SHIFT_BY_ID,
    payload,
  }
}
export const getShiftByIdResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_SHIFT_BY_ID_RESPONSE,
    payload,
  }
}
