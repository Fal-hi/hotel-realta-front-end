import { all, takeEvery } from "redux-saga/effects"
import ActionTypes from "../action/actionType"
import {  handleAddRestoMenu, handleDeleteRestoMenu, handleGetRestoMenuAll, handleUpdateRestoMenu } from "./adminsaga"
import { handleAddRestoPhotos, handleGetGuest } from "./restomenusaga";
import { handleAddOrderResto } from "./orderSaga";

function* watchAll(){
    yield all([
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////// RESTO MENUS ////////////////////////
        takeEvery(ActionTypes.GET_RESTOMENU,handleGetRestoMenuAll),
        takeEvery(ActionTypes.ADD_RESTOMENU,handleAddRestoMenu),
        takeEvery(ActionTypes.DEL_RESTOMENU,handleDeleteRestoMenu),
        takeEvery(ActionTypes.UPDATE_RESTOMENU,handleUpdateRestoMenu),

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////// RESTO MENUS PHOTOS ////////////////////////
        takeEvery(ActionTypes.ADD_RESTOMENU_PHOTOS,handleAddRestoPhotos),
        takeEvery(ActionTypes.GET_GUEST,handleGetGuest),


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////// ORDER RESTO MENUS ////////////////////////
    takeEvery(ActionTypes.ADD_ORDER,handleAddOrderResto),        

    ]);
}

export default watchAll;