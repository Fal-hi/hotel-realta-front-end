import { all, take, takeEvery } from "redux-saga/effects";
import ActionTypes from "../action/actionType";
import { handleAddVendor, handleDelVendor, handleGetProduct, handleGetVendor, handleSearchVendor, handleUpdateVedor } from "./vendorSaga";
import { handleGetStock } from "./stockSaga";
import { handleGetListOrder } from "./listOrderSaga";

function* watchAll() {
  yield all([
    //VENDOR
    takeEvery(ActionTypes.REQ_GET_VENDOR,handleGetVendor),
    takeEvery(ActionTypes.ADD_VENDOR,handleAddVendor),
    takeEvery(ActionTypes.REQ_GET_PRODUCT,handleGetProduct),
    takeEvery(ActionTypes.DEL_VENDOR,handleDelVendor),
    takeEvery(ActionTypes.UPDATE_VENDOR,handleUpdateVedor),
    takeEvery(ActionTypes.SEARCH_VENDOR,handleSearchVendor),

    //STOCK
    takeEvery(ActionTypes.REQ_GET_STOCK,handleGetStock),

    //LISTORDER
    takeEvery(ActionTypes.REQ_GET_LISTORDER,handleGetListOrder),
  ]);
}

export default watchAll;
