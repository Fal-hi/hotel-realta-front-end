import ActionTypesUsers from "../action/actionTypeUsers"

const initialState = {
  users: [],
  message: "",
  isRegister: "",
  refresh: "",
  status: "",
}

function registerReducers(state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case ActionTypesUsers.REQ_REGISTER:
      return {
        payload,
        refresh: true,
        message: payload?.message,
        isRegister: true,
      }
    case ActionTypesUsers.REGISTER_SUCCESS:
      return {
        payload,
        refresh: true,
        message: payload?.message,
        isRegister: true,
      }
    case ActionTypesUsers.REGISTER_FAILED:
      return { message: payload.message, payload, isRegister: false }
    default:
      return state
  }
}

export default registerReducers
