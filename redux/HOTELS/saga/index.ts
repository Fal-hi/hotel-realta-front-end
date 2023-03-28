import { takeEvery, all } from "redux-saga/effects"
import ActionTypes from "../action/actionType"

import {
  handleAddHotels,
  handleDelHotels,
  handleGetHotels,
  handleUpdateHotels,
} from "./hotelsSaga"

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.REQ_GET_HOTELS, handleGetHotels),
    takeEvery(ActionTypes.ADD_HOTELS, handleAddHotels),
    takeEvery(ActionTypes.UPDATE_HOTELS, handleUpdateHotels),
    takeEvery(ActionTypes.DEL_HOTELS, handleDelHotels),
  ])
}

export default watchAll
