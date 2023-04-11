import { call, put } from "redux-saga/effects";
import ApiPurchasing from "@/api/purchasing/apiPurchasing";
import { doAddVeproResponse, doDeleteVeproResponse, doUpdateVeproResponse } from "../action/actionVepro";

function* handleAddVepro(action: any): any {
    try {
        const result = yield call(ApiPurchasing.createVendorProduct, action.payload)
        yield put(doAddVeproResponse(result.data))
    }
    catch (error) {
        yield put(doAddVeproResponse({ message: error }))
    }
}

function* handleDelVepro(action: any) :any {
    try {
        const result = yield call(ApiPurchasing.removeVepro, action.payload)
        // console.log(result)
        yield put(doDeleteVeproResponse(result.data))
    }
    catch (error) {
        yield put(doDeleteVeproResponse({ error }))
    }
}

function* handleUpdateVepro(action: any) : any {
    try {
        const result = yield call(ApiPurchasing.updateVepro, action.payload[0], action.payload[1])
        yield put(doUpdateVeproResponse(result.data))
    }
    catch (error) {
        yield put(doUpdateVeproResponse({ message: error }))
    }
}

export {handleAddVepro, handleDelVepro, handleUpdateVepro}