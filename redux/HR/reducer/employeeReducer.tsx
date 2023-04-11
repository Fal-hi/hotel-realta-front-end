import ActionTypes from "../action/actionTypes"

const initialState = {
  data: {},
  employee: [],
  usersProfiles: {},
  shifts: [],
  shift: {},
  users: [],
  jobRoles: {},
  statusCode: "200",
  message: "success",
}
interface Iaction {
  type: string
  payload: {
    statusCode: number
    message: string
    data?: any[] | {} | undefined
  }
}

export function employeeReducers(state = initialState, action: Iaction) {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.GET_EMPLOYEE_RESPONSE:
      return {
        ...state,
        employee: payload.data,
        refresh: true,
      }
    case ActionTypes.CREATE_EMPLOYEE_RESPONSE:
      return {
        ...state,
        createResponse: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_EMPLOYEE_FOR_UPDATE_RESPONSE:
      return {
        ...state,
        oneEmployee: payload.data,
        refresh: true,
      }
    case ActionTypes.UPDATE_EMPLOYEE_RESPONSE:
      return {
        ...state,
        updateResponse: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_JOB_ROLE_OPTION_RESPONSE:
      return {
        ...state,
        jobRoles: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_DEPARTMENT_OPTION_RESPONSE:
      return {
        ...state,
        departments: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_USERS_FOR_SEARCH_OPTION_EMPLOYEE_RESPONSE:
      return {
        ...state,
        users: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_USERS_FOR_PPROFILES_RESPONSE:
      return {
        ...state,
        usersProfiles: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_SHIFT_RESPONSE:
      return {
        ...state,
        shifts: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_SHIFT_BY_ID_RESPONSE:
      return {
        ...state,
        shift: payload,
        refresh: true,
      }

    default:
      return state
  }
}
