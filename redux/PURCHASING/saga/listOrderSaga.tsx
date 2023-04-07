import { call, put } from "redux-saga/effects";
import ApiPurchasing from "@/api/purchasing/apiPurchasing";
import { doGetListOrderResponse } from "../action/actionListOrder";

function* handleGetListOrder(action: any): any {
    try {
        const { search, page, entry } = action.payload
        const result = yield call(ApiPurchasing.getListOrder, search, page, entry);
        yield put(doGetListOrderResponse(result.data))
        console.log(result.data)
    }
    catch (error) {
        yield put(doGetListOrderResponse({ message: error }))
    }
}

export { handleGetListOrder }
