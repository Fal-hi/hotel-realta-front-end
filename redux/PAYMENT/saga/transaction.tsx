
import FintechApi from "@/api/payment/fintechApi";
import TransactionApi from "@/api/payment/transaction";

import {call, put} from "redux-saga/effects"
import { getDataTransactionRespons } from "../action/transaction";

function* handleGetTransaction():any {
    try {
        const result:any = yield call(TransactionApi.getTransaction);     
        yield put(getDataTransactionRespons (result.data.data))
    } catch (err) {
        yield put(getDataTransactionRespons({message: err}))
    }
}

export {
    handleGetTransaction
}