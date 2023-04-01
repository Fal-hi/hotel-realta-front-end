import { call, put } from "redux-saga/effects";
import ApiPurchasing from "@/api/purchasing/apiPurchasing";
import { doGetStockResponse } from "../action/actionStock";

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

export { handleGetStock }
