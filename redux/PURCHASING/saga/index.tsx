import { all, take, takeEvery } from "redux-saga/effects";
import ActionTypes from "../action/actionType";
import { handleAddVendor, handleDelVendor, handleGetProduct, handleGetProductId, handleGetVendor, handleSearchVendor, handleUpdateVedor } from "./vendorSaga";
import { handleAddStock, handleDelStock, handleFindStock, handleGetStock, handleUpdateStock } from "./stockSaga";
import { handleDelListDetail, handleDelListOrder, handleFindListOrder, handleGetListOrder, handleUpdateListOrder } from "./listOrderSaga";
import { handleAddVepro, handleDelVepro, handleUpdateVepro } from "./veproSaga";
import { handleAddPode, handleUpdatePode } from "./podeSaga";
import { handleAddStod, handleUpdateStod } from "./stodSaga";
import { handleAddPhotos, handleAddPohe, handleGetPhotos } from "./poheSaga";

function* watchAll() {
  yield all([
    //VENDOR
    takeEvery(ActionTypes.REQ_GET_VENDOR,handleGetVendor),
    takeEvery(ActionTypes.ADD_VENDOR,handleAddVendor),
    takeEvery(ActionTypes.REQ_GET_PRODUCT,handleGetProduct),
    takeEvery(ActionTypes.DEL_VENDOR,handleDelVendor),
    takeEvery(ActionTypes.UPDATE_VENDOR,handleUpdateVedor),
    takeEvery(ActionTypes.SEARCH_VENDOR,handleSearchVendor),
    takeEvery(ActionTypes.REQ_GET_PRODUCTID,handleGetProductId),

    //STOCK
    takeEvery(ActionTypes.REQ_GET_STOCK,handleGetStock),
    takeEvery(ActionTypes.ADD_STOCK,handleAddStock),
    takeEvery(ActionTypes.DEL_STOCK,handleDelStock),
    takeEvery(ActionTypes.UPDATE_STOCK,handleUpdateStock),
    takeEvery(ActionTypes.FIND_STOCK,handleFindStock),

    //LISTORDER
    takeEvery(ActionTypes.REQ_GET_LISTORDER,handleGetListOrder),
    takeEvery(ActionTypes.UPDATE_LISTORDER,handleUpdateListOrder),
    takeEvery(ActionTypes.DEL_LISTORDER,handleDelListOrder),
    takeEvery(ActionTypes.FIND_LISTORDER,handleFindListOrder),
    takeEvery(ActionTypes.DEL_LIST_DETAIL,handleDelListDetail),

    //VEPRO
    takeEvery(ActionTypes.ADD_VEPRO,handleAddVepro),
    takeEvery(ActionTypes.DEL_VEPRO,handleDelVepro),
    takeEvery(ActionTypes.UPDATE_VEPRO,handleUpdateVepro),

    //PODE
    takeEvery(ActionTypes.ADD_PODE,handleAddPode),
    takeEvery(ActionTypes.UPDATE_PODE,handleUpdatePode),

    //STOD
    takeEvery(ActionTypes.ADD_STOD,handleAddStod),
    takeEvery(ActionTypes.UPDATE_STOD,handleUpdateStod),

    //POHE
    takeEvery(ActionTypes.ADD_POHE,handleAddPohe),

    //STOCK PHOTOS
    takeEvery(ActionTypes.ADD_PHOTOS,handleAddPhotos),
    takeEvery(ActionTypes.GET_ALL_PHOTOS,handleGetPhotos),
  ]);
}

export default watchAll;
