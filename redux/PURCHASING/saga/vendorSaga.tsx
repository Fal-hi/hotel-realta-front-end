import { call, put } from "redux-saga/effects";
import ApiVendor from "@/api/purchasing/apiVendor";
import { doAddResponse, doDeleteResponse, doGetProductResponse, doGetVendorResponse, doSearchResponse, doUpdateResponse } from "../action/actionVendor";

function* handleGetVendor(action: any): any {
    try {
        const { search, page, entry } = action.payload
        const result = yield call(ApiVendor.getAll, search, page, entry);
        console.log(result)
        yield put(doGetVendorResponse(result.data))
    }
    catch (error) {
        yield put(doGetVendorResponse({ message: error }))
    }
}

function* handleAddVendor(action: any): any {
    try {
        console.log(action.payload)
        const result = yield call(ApiVendor.create, action.payload)
        yield put(doAddResponse(result.data))
    }
    catch (error) {
        yield put(doAddResponse({ message: error }))
    }
}

function* handleGetProduct(): any {
    try {
        const result = yield call(ApiVendor.product);
        console.log(result)
        yield put(doGetProductResponse(result.data))
    }
    catch (error) {
        yield put(doGetProductResponse({ message: error }))
    }
}

function* handleDelVendor(action: any) :any {
    try {
        const result = yield call(ApiVendor.remove, action.payload)
        yield put(doDeleteResponse(result.data))
    }
    catch (error) {
        yield put(doDeleteResponse({ error }))
    }
}

function* handleUpdateVedor(action: any) :any {
    try {
        const result = yield call(ApiVendor.update, action.payload[0], action.payload[1])
        yield put(doUpdateResponse(result.data))
    }
    catch (error) {
        yield put(doUpdateResponse({ message: error }))
    }
}

function* handleSearchVendor(action: any) :any {
    try {
        const result = yield call(ApiVendor.search, action.payload)
        yield put(doSearchResponse(result.data))
        console.log(result.data)
    }
    catch (error) {
        yield put(doSearchResponse({ message: error }))
    }
}

export { handleGetVendor, handleAddVendor, handleGetProduct, handleDelVendor, handleUpdateVedor, handleSearchVendor }