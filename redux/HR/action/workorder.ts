import ActionTypes from "./actionTypes"

export const getWorkOrder = (payload: any) => {
  return {
    type: ActionTypes.GET_WORKORDER,
    payload,
  }
}
export const getWorkOrderResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_WORKORDER_RESPONSE,
    payload,
  }
}
export const getWorkOrderForUpdate = (payload: any) => {
  return {
    type: ActionTypes.GET_WORKORDER_FOR_UPDATE,
    payload,
  }
}
export const getWorkOrderForUpdateResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_WORKORDER_FOR_UPDATE_RESPONSE,
    payload,
  }
}
export const createWorkOrder = (payload: any) => {
  return {
    type: ActionTypes.CREATE_WORK_ORDER,
    payload,
  }
}
export const createWorkOrderResponse = (payload: any) => {
  return {
    type: ActionTypes.CREATE_WORK_ORDER_RESPONSE,
    payload,
  }
}
export const updateWorkOrder = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_WORKORDER,
    payload,
  }
}
export const updateWorkOrderResponse = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_WORKORDER_RESPONSE,
    payload,
  }
}
export const getWorkOrderDetail = (payload: any) => {
  return {
    type: ActionTypes.GET_WORKORDER_DETAIL,
    payload,
  }
}
export const getWorkOrderDetailResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_WORKORDER_DETAIL_RESPONSE,
    payload,
  }
}
export const createWorkOrderDetail = (payload: any) => {
  return {
    type: ActionTypes.CREATE_WORKORDER_DETAIL,
    payload,
  }
}
export const createWorkOrderDetailResponse = (payload: any) => {
  return {
    type: ActionTypes.CREATE_WORKORDER_DETAIL_RESPONSE,
    payload,
  }
}
export const getEmployeeNameOption = (payload: any) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_NAME_OPTION,
    payload,
  }
}

export const getEmployeeNameOptionResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_EMPLOYEE_NAME_OPTION_RESPONSE,
    payload,
  }
}
export const getTaskName = (payload: any) => {
  return {
    type: ActionTypes.GET_TASK_NAME,
    payload,
  }
}
export const getTaskNameResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_TASK_NAME_RESPONSE,
    payload,
  }
}
