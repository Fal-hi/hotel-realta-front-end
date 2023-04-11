import { call, put } from "redux-saga/effects";
import ApiPurchasing from "@/api/purchasing/apiPurchasing";
import { doAddStodResponse, doUpdateStodResponse } from "../action/actionStod";

function* handleAddStod(action: any): any {
    try {
        const result = yield call(ApiPurchasing.createStod, action.payload)
        console.log(result)
        yield put(doAddStodResponse(result.data))
    }
    catch (error) {
        yield put(doAddStodResponse({ message: error }))
    }
}

function* handleUpdateStod(action: any) :any {
    try {
        const result = yield call(ApiPurchasing.updateStod, action.payload[0], action.payload[1])
        console.log(result.data)
        yield put(doUpdateStodResponse(result.data))
        
    }
    catch (error) {
        yield put(doUpdateStodResponse({ message: error }))
    }
}


export { handleAddStod, handleUpdateStod }