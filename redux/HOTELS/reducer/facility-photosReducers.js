import ActionTypes from "../action/actionType"

const initialState = {
  facilitiesPhotos: [],
  message: "",
  refresh: false,
  error: false,
  status: "",
}

export function facilitiesReducers(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.ADD_FACI_PHOTOS_RESPONSE:
      return { message: payload.message, refresh: false }
    default:
      return state
  }
}
