import { call, put } from "redux-saga/effects";
import ApiPurchasing from "@/api/purchasing/apiPurchasing";
import {  doAddPodeResponse, doUpdatePodeResponse } from "../action/actionPode";

function* handleAddPode(action: any): any {
    console.log("Pode Saga",action)
    try {
        const result = yield call(ApiPurchasing.createPode, action.payload)
        console.log("action", result.data)
        yield put(doAddPodeResponse(result.data))
    }
    catch (error) {
        yield put(doAddPodeResponse({ message: error }))
    }
}

function* handleUpdatePode(action: any) :any {
    try {
        const result = yield call(ApiPurchasing.updatePode, action.payload[0], action.payload[1])
        // console.log(result)
        yield put(doUpdatePodeResponse(result.data))
        
    }
    catch (error) {
        yield put(doUpdatePodeResponse({ message: error }))
    }
}


export { handleAddPode, handleUpdatePode }