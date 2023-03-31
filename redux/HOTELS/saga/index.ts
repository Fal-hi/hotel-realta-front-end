import { takeEvery, all } from "redux-saga/effects"
import ActionTypes from "../action/actionType"

import {
  handleAddHotels,
  handleDelHotels,
  handleGetHotels,
  handleUpdateHotels,
  handleGetHotelsByName,
} from "./hotelsSaga"

import { handleGetAddress, handleGetAddressById } from "./addressSaga"

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.REQ_GET_HOTELS, handleGetHotels),
    takeEvery(ActionTypes.ADD_HOTELS, handleAddHotels),
    takeEvery(ActionTypes.UPDATE_HOTELS, handleUpdateHotels),
    takeEvery(ActionTypes.DEL_HOTELS, handleDelHotels),
    takeEvery(ActionTypes.REQ_GET_HOTELS_BY_NAME, handleGetHotelsByName),

    takeEvery(ActionTypes.REQ_GET_ADDRESS, handleGetAddress),
    takeEvery(ActionTypes.REQ_GET_ADDRES_BY_ID, handleGetAddressById),
  ])
}

export default watchAll
