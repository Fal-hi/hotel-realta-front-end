import ActionTypesUsers from "../action/actionTypeUsers"

const initialState = {
  users: [],
  usersBonusPoints: [],
  usersHistoryMember: [],
  usersProfile: [],
  message: "",
  refresh: "",
}

function generalReducers(state = initialState, action: any) {
  const { type, payload } = action
  switch (type) {
    case ActionTypesUsers.GET_USERS_RESPONSE:
      console.log("payload", payload)
      return {
        ...state,
        users: payload,
        refresh: true,
      }

    case ActionTypesUsers.GET_BONUS_POINT_RESPONSE:
      console.log(payload)
      return {
        ...state,
        usersBonusPoints: payload.data,
        refresh: true,
      }

    case ActionTypesUsers.GET_HISTORY_MEMBER_RESPONSE:
      console.log(payload)

      return {
        ...state,
        usersHistoryMember: payload,
        refresh: true,
        message: payload?.message,
      }

    case ActionTypesUsers.UPDATE_GENERAL_MEMBER_RESPONSE:
      console.log(payload)

      return {
        ...state,
        users: payload,
        refresh: false,
        message: payload?.message,
      }

    default:
      return state
  }
}

export default generalReducers
