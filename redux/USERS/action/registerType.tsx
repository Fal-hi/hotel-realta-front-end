import ActionTypesUsers from "./actionTypeUsers"

export const doRegisterEmployee = (payload: any) => {
  return {
    type: ActionTypesUsers.REQ_REGISTER,
    payload,
  }
}

export const doRegisterGuest = (payload: any) => {
  return {
    type: ActionTypesUsers.REQ_REGISTER_GUEST,
    payload,
  }
}

export const doRegisterSuccess = (payload: any) => {
  return {
    type: ActionTypesUsers.REGISTER_SUCCESS,
    payload,
  }
}

export const doRegisterFailed = (payload: any) => {
  return {
    type: ActionTypesUsers.REGISTER_FAILED,
    payload,
  }
}
