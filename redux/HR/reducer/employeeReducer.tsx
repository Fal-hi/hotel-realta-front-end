import ActionTypes from "../action/actionTypes"

const initialState = {
  data: {},
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
        data: payload.data,
        refresh: true,
      }
    case ActionTypes.CREATE_EMPLOYEE_RESPONSE:
      return {
        data: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_EMPLOYEE_FOR_UPDATE_RESPONSE:
      return {
        data: payload.data,
        refresh: true,
      }
    case ActionTypes.UPDATE_EMPLOYEE_RESPONSE:
      return {
        data: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_JOB_ROLE_OPTION_RESPONSE:
      return {
        data: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_DEPARTMENT_OPTION_RESPONSE:
      return {
        data: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_USERS_FOR_SEARCH_OPTION_EMPLOYEE_RESPONSE:
      return {
        data: payload.data,
        refresh: true,
      }

    default:
      return state
  }
}
