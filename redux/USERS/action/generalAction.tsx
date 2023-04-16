import ActionTypesUsers from "./actionTypeUsers"
export const doGetUsers = (payload: any) => {
  return {
    type: ActionTypesUsers.GET_USERS,
    payload,
  }
}
export const doGetUsersResponse = (payload: any) => {
  return {
    type: ActionTypesUsers.GET_USERS_RESPONSE,
    payload,
  }
}
export const doGetBonusPoint = (payload: any) => {
  return {
    type: ActionTypesUsers.GET_BONUS_POINT,
    payload,
  }
}
export const doGetBonusPointResponse = (payload: any) => {
  return {
    type: ActionTypesUsers.GET_BONUS_POINT_RESPONSE,
    payload,
  }
}

export const doGetHistoryMember = (payload: any) => {
  return {
    type: ActionTypesUsers.GET_HISTORY_MEMBER,
    payload,
  }
}
export const doGetHistoryMemberResponse = (payload: any) => {
  console.log('ini payload',payload)
  return {
    type: ActionTypesUsers.GET_HISTORY_MEMBER_RESPONSE,
    payload,
  }
}

export const doReqUpdateEditGeneral = (payload: any) => {
  return {
    type: ActionTypesUsers.UPDATE_GENERAL_MEMBER,
    payload,
  }
}
export const doReqUpdateEditGeneralResponse = (payload: any) => {
  console.log("ini payload", payload)
  return {
    type: ActionTypesUsers.UPDATE_GENERAL_MEMBER_RESPONSE,
    payload,
  }
}
