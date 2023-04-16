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
      console.log(payload)

      return {
        payload,
        refresh: true,
        message: payload?.message,
        isRegister: true,
      }
    case ActionTypesUsers.REGISTER_SUCCESS:
      console.log(payload)
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
