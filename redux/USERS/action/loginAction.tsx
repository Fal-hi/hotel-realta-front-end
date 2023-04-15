import ActionTypesUsers from "./actionTypeUsers"

export const doLoginEmployee = (payload: any) => {
  return {
    type: ActionTypesUsers.REQ_GET_LOGIN,
    payload,
  }
}

export const doLoginSuccess = (payload: any) => {
  return {
    type: ActionTypesUsers.LOGIN_SUCCESS,
    payload,
  }
}

export const doLoginFailed = (payload: any) => {
  return {
    type: ActionTypesUsers.LOGIN_FAILED,
    payload,
  }
}

export const doLoginGuest = (payload: any) => {
  return {
    type: ActionTypesUsers.REQ_LOGIN_GUEST,
    payload,
  }
}

export const doLogout = () => {
  return {
    type: ActionTypesUsers.REQ_LOGOUT,
  }
}

export const doLogoutSuccess = () => {
  return {
    type: ActionTypesUsers.LOGOUT_SUCCESS,
  }
}
