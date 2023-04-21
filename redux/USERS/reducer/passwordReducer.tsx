import ActionTypesUsers from "../action/actionTypeUsers"

const initialState = {
  users: [],
  payload: "",
  message: "",
  status: "",
}

function passwordReducers(state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case ActionTypesUsers.UPDATE_PASSWORD_SUCCESS:
      return { message: payload.message, payload }
    case ActionTypesUsers.UPDATE_PASSWORD_FAILED:
      return { message: payload.message, payload }

    default:
      return state
  }
}

export default passwordReducers
