import { call, put } from "redux-saga/effects";
import ApiPurchasing from "@/api/purchasing/apiPurchasing";
import { doAddPhotosResponse, doAddPoheResponse, doGetPhotosResponse } from "../action/actionPohe";

function* handleAddPohe(action: any): any {
    try {
        const result = yield call(ApiPurchasing.createPohe, action.payload)
        console.log("--------->",result)
        yield put(doAddPoheResponse(result.data))
    }
    catch (error) {
        yield put(doAddPoheResponse({ message: error }))
    }
}

function* handleAddPhotos(action: any) :any {
    try {
        console.log(action.payload)
        const result = yield call(ApiPurchasing.createPhotos, action.payload)
        yield put(doAddPhotosResponse(result.data))
    }
    catch (error) {
        yield put(doAddPhotosResponse({ message: error }))
    }
}

function* handleGetPhotos(action: any): any {
    try {
        const { search, page, entry } = action.payload
        const result = yield call(ApiPurchasing.getPhotos, search, page, entry);
        yield put(doGetPhotosResponse(result.data))
        // console.log(result.data)
    }
    catch (error) {
        yield put(doGetPhotosResponse({ message: error }))
    }
}

export { handleAddPohe, handleAddPhotos, handleGetPhotos }
