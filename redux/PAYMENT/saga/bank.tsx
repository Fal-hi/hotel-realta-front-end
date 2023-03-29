import BankApi from "@/api/payment/bankApi"

import {call, put} from "redux-saga/effects"
import { getDataBankRespons } from "../action/bank";

function* handleGetBank(action:any):any {
    try {
        const result:any = yield call(BankApi.getBank,action.payload);
      
        yield put(getDataBankRespons(result.data.data))
    } catch (err) {
        yield put(getDataBankRespons({message: err}))
    }
}

export {
    handleGetBank
}