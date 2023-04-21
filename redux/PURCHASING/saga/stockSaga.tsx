import { call, put } from "redux-saga/effects";
import ApiPurchasing from "@/api/purchasing/apiPurchasing";
import { doAddStockResponse, doDeleteStockResponse, doGetFindListStockResponse, doGetStockResponse, doUpdateStockResponse } from "../action/actionStock";

function* handleGetStock(action: any): any {
    try {
        const { search, page, entry } = action.payload
        const result = yield call(ApiPurchasing.getAllStock, search, page, entry);
        yield put(doGetStockResponse(result.data))
        // console.log(result.data)
    }
    catch (error) {
        yield put(doGetStockResponse({ message: error }))
    }
}

function* handleAddStock(action: any): any {
    try {
        const result = yield call(ApiPurchasing.createStock, action.payload)
        yield put(doAddStockResponse(result.data))
    }
    catch (error) {
        yield put(doAddStockResponse({ message: error }))
    }
}

function* handleDelStock(action: any) :any {
    try {
        const result = yield call(ApiPurchasing.removeStock, action.payload)
        yield put(doDeleteStockResponse(result.data))
    }
    catch (error) {
        yield put(doDeleteStockResponse({ error }))
    }
}

function* handleUpdateStock(action: any) :any {
    try {
        const result = yield call(ApiPurchasing.updateStock, action.payload[0], action.payload[1])
        yield put(doUpdateStockResponse(result.data))
    }
    catch (error) {
        yield put(doUpdateStockResponse({ message: error }))
    }
}

function* handleFindStock(action: any): any {
    try {
        const result = yield call(ApiPurchasing.stockId, action.payload);
        console.log("===>", result.data)
        // doGetFindListOrderResponse
        yield put(doGetFindListStockResponse(result.data))
        
    }
    catch (error) {
        yield put(doGetFindListStockResponse({ message: error }))
    }
}


export { handleGetStock, handleAddStock, handleDelStock, handleUpdateStock, handleFindStock }
