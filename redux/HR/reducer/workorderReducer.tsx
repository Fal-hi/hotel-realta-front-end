import ActionTypes from "../action/actionTypes"

const initialState = {
  workorder: [],
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
export function workorderReducers(state = initialState, action: Iaction) {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.GET_WORKORDER_RESPONSE:
      return {
        ...state,
        workorder: payload.data,
        refresh: true,
      }
    case ActionTypes.CREATE_WORK_ORDER_RESPONSE:
      return {
        ...state,
        createworkorderResponse: payload.data,
        refresh: true,
      }
    case ActionTypes.UPDATE_WORKORDER_RESPONSE:
      return {
        ...state,
        updateworkorderResponse: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_WORKORDER_DETAIL_RESPONSE:
      return {
        ...state,
        workorderDetail: payload.data,
        refresh: true,
      }
    case ActionTypes.CREATE_WORKORDER_DETAIL_RESPONSE:
      return {
        ...state,
        createworkorderDetailResponse: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_EMPLOYEE_NAME_OPTION_RESPONSE:
      return {
        ...state,
        employeeNameOption: payload.data,
        refresh: true,
      }
    case ActionTypes.GET_TASK_NAME_RESPONSE:
      return {
        ...state,
        taskName: payload.data,
        refresh: true,
      }

    default:
      return state
  }
}
