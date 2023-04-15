import ActionTypesUsers from "../action/actionTypeUsers"

const initialState = {
  users: [],
  usersBonusPoints: [],
  usersHistoryMember: [],
  message: "",
  refresh: "",
}

function generalReducers(state = initialState, action: any) {
  const { type, payload } = action
  switch (type) {
    case ActionTypesUsers.GET_USERS_RESPONSE:
      return {
        ...state,
        users: payload,
        refresh: true,
      }

    case ActionTypesUsers.GET_BONUS_POINT_RESPONSE:
      return {
        ...state,
        usersBonusPoints: payload,
        refresh: true,
      }

    case ActionTypesUsers.GET_HISTORY_MEMBER_RESPONSE:
      return {
        ...state,
        usersHistoryMember: payload,
        refresh: true,
        message: payload?.message,
      }
    default:
      return state
  }
}

export default generalReducers
