import { all, takeEvery } from "redux-saga/effects"
import ActionTypes from "../action/actionType"
import { handleGetNamaResto, handleGetRestoMenuAll } from "./adminsaga"

function* watchAll(){
    yield all([
        takeEvery(ActionTypes.GET_RESTOMENU,handleGetRestoMenuAll),
        takeEvery(ActionTypes.GET_RESTO,handleGetNamaResto)
    ]);
}

export default watchAll;