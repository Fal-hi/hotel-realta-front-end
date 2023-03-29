
import FintechApi from "@/api/payment/fintechApi";

import {call, put} from "redux-saga/effects"
import { getDataFintechRespons } from "../action/fintech";

function* handleGetFintech(action:any):any {
    try {
        const result:any = yield call(FintechApi.getFintech,action.payload);     
        yield put(getDataFintechRespons(result.data.data))
    } catch (err) {
        yield put(getDataFintechRespons({message: err}))
    }
}

export {
    handleGetFintech
}