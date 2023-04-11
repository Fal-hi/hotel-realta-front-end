import ActionTypes from "./actionType"

export const doAddFaciPhotos = payload => {
  return {
    type: ActionTypes.ADD_FACI_PHOTOS,
    payload,
  }
}

export const doAddFaciPhotosResponse = payload => {
  return {
    type: ActionTypes.ADD_FACI_PHOTOS_RESPONSE,
    payload,
  }
}
