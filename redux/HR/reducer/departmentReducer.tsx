import ActionTypes from "../action/actionTypes"
import { Iaction } from "../saga/department"

const initialState = {
  data: {},
  statusCode: "200",
  message: "success",
}

export function departmentReducers(state = initialState, action: Iaction) {
  let { type, payload } = action

  switch (type) {
    case ActionTypes.GET_DEPARTMENT_RESPONSE:
      return {
        ...state,
        data: payload.data,
        refresh: true,
      }
    case ActionTypes.CREATE_DEPARTMENT_RESPONSE:
      return {
        ...state,
        createDepartment: payload.data,
        response: "create",
        refresh: true,
      }
    case ActionTypes.DELETE_DEPARTMENT_RESPONSE:
      return {
        ...state,
        deleteDepartmentResponse: payload.data,
        response: "delete",
        refresh: true,
      }
    case ActionTypes.UPDATE_DEPARTEMENT_RESPONSE:
      return {
        ...state,
        updateDepartment: payload.data,
        response: "update",
        refresh: true,
      }
    default:
      return state
  }
}
