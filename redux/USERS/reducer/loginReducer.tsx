import ActionTypesUsers from "../action/actionTypeUsers"

const initialState = {
  users: [],
  message: "",
  isLogin: "",
  refresh: "",
  status: "",
}

function loginReducers(state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case ActionTypesUsers.LOGIN_SUCCESS:
      return {
        users: payload,
        refresh: true,
        message: payload?.message,
        isLogin: true,
      }
    case ActionTypesUsers.LOGIN_FAILED:
      return { message: payload.message, payload, isLogin: false }
    case ActionTypesUsers.LOGOUT_SUCCESS:
      return { message: "Logout Success", isLogin: false, payload }
    default:
      return state
  }
}

export default loginReducers
