import { call, put } from "redux-saga/effects"
import ApiMethodFacilitesPhotos from "../../../api/hotel/facility-photos"

import { doAddFaciPhotosResponse } from "../action/actionFacility-photos"

function* handleAddFacilityPhotos(action) {
  // console.log(action)
  try {
    const formData = new FormData()
    formData.append("fapho_faci_id", action.payload.fapho_faci_id)
    formData.append(
      "fapho_thumbnail_filename",
      action.payload.fapho_thumbnail_filename
    )
    formData.append("fapho_primary", action.payload.fapho_primary)
    formData.append("fapho_photo_filename", action.payload.fapho_photo_filename)
    // formData.append("file", action.payload.file[0]); // file gambar

    const result = yield call(
      ApiMethodFacilitesPhotos.createFaciPhotos,
      formData
    )
    // console.log(result)
    yield put(doAddFaciPhotosResponse(result))
  } catch (error) {
    // console.log(error)
    yield put(doAddFaciPhotosResponse(error))
  }
}

export { handleAddFacilityPhotos }
