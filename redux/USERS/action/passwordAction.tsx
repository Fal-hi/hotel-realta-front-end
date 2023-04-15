import ActionTypesUsers from "./actionTypeUsers"
export const doUpdatePassword = (payload: any) => {
  return {
    type: ActionTypesUsers.UPDATE_PASSWORD,
    payload,
  };
};

export const doUpdatePasswordSuccess = (payload: any) => {
  return {
    type: ActionTypesUsers.UPDATE_PASSWORD_SUCCESS,
    payload,
  };
};

export const doUpdatePasswordFailed = (payload: any) => {
  return {
    type: ActionTypesUsers.UPDATE_PASSWORD_FAILED,
    payload,
  };
};
