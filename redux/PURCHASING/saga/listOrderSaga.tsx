import { call, put } from "redux-saga/effects";
import ApiPurchasing from "@/api/purchasing/apiPurchasing";
import { doDeleteListDetailResponse, doDeleteListOrderResponse, doGetFindListOrderResponse, doGetListOrderResponse, doUpdateListResponse } from "../action/actionListOrder";

function* handleGetListOrder(action: any): any {
    try {
        const { search, page, entry, searchStat } = action.payload
        const result = yield call(ApiPurchasing.getListOrder, search, page, entry, searchStat);
        yield put(doGetListOrderResponse(result.data))
        // console.log(result.data)
    }
    catch (error) {
        yield put(doGetListOrderResponse({ message: error }))
    }
}

function* handleUpdateListOrder(action: any) :any {
    try {
        const result = yield call(ApiPurchasing.updateListOrder, action.payload[0], action.payload[1])
        yield put(doUpdateListResponse(result.data))
    }
    catch (error) {
        yield put(doUpdateListResponse({ message: error }))
    }
}

function* handleDelListOrder(action: any) :any {
    try {
        const result = yield call(ApiPurchasing.removeListOrder, action.payload)
        console.log(result.data)
        yield put(doDeleteListOrderResponse(result.data))
    }
    catch (error) {
        yield put(doDeleteListOrderResponse({ error }))
    }
}

function* handleFindListOrder(action: any): any {
    try {
        const result = yield call(ApiPurchasing.findListOrder, action.payload);
        console.log("===>", result.data)
        // doGetFindListOrderResponse
        yield put(doGetFindListOrderResponse(result.data))
        
    }
    catch (error) {
        yield put(doGetFindListOrderResponse({ message: error }))
    }
}

function* handleDelListDetail(action: any) :any {
    try {
        const result = yield call(ApiPurchasing.removePurchaseDetail, action.payload)
        console.log(result.data)
        yield put(doDeleteListDetailResponse(result.data))
    }
    catch (error) {
        yield put(doDeleteListDetailResponse({ error }))
    }
}

export { handleGetListOrder, handleUpdateListOrder, handleDelListOrder, handleFindListOrder, handleDelListDetail }
