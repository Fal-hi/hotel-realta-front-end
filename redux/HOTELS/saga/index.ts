import { takeEvery, all } from "redux-saga/effects"
import ActionTypes from "../action/actionType"

import {
  handleAddHotels,
  handleDelHotels,
  handleGetHotels,
  handleUpdateHotels,
  handleGetHotelsByName,
  handleGetHotelsById,
} from "./hotelsSaga"

import { handleGetAddress, handleGetAddressById } from "./addressSaga"

import {
  handleAddFacility,
  handleGetFaci,
  handleGetFaciByName,
  handleUpdateFacility,
} from "./facilitiesSaga"

import {
  handleGetFaciHistory,
  handleGetFaciHistoryByOrder,
} from "./facilityPriceHistorySaga"

import { handleAddFacilityPhotos } from "./facility-photosSaga"

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.REQ_GET_HOTELS, handleGetHotels),
    takeEvery(ActionTypes.REQ_GET_HOTELS_BY_ID, handleGetHotelsById),
    takeEvery(ActionTypes.ADD_HOTELS, handleAddHotels),
    takeEvery(ActionTypes.UPDATE_HOTELS, handleUpdateHotels),
    takeEvery(ActionTypes.DEL_HOTELS, handleDelHotels),
    takeEvery(ActionTypes.REQ_GET_HOTELS_BY_NAME, handleGetHotelsByName),

    takeEvery(ActionTypes.REQ_GET_FACI, handleGetFaci),
    takeEvery(ActionTypes.REQ_GET_FACI_BY_NAME, handleGetFaciByName),
    takeEvery(ActionTypes.ADD_FACI, handleAddFacility),
    takeEvery(ActionTypes.UPDATE_FACI, handleUpdateFacility),

    takeEvery(ActionTypes.ADD_FACI_PHOTOS, handleAddFacilityPhotos),

    takeEvery(ActionTypes.REQ_GET_FACI_HISTORY, handleGetFaciHistory),
    takeEvery(
      ActionTypes.REQ_GET_FACI_HISTORY_BY_ORDER,
      handleGetFaciHistoryByOrder
    ),

    takeEvery(ActionTypes.REQ_GET_ADDRESS, handleGetAddress),
    takeEvery(ActionTypes.REQ_GET_ADDRES_BY_ID, handleGetAddressById),
  ])
}

export default watchAll
