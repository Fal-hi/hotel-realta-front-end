import BankApi from "@/api/payment/bankApi"

import {call, put} from "redux-saga/effects"
import { createDataBankRespons, deleteDataBankRespons, getDataBankRespons, updateDataBankRespons } from "../action/bank";

function* handleGetBank(action:any):any {
    try {
        const result:any = yield call(BankApi.getBank,action.payload);
        yield put(getDataBankRespons(result.data))
    } catch (err) {
        yield put(getDataBankRespons({message: err}))
    }
}

function* handleCreateBank(action:any):any {
    try {
        const result:any = yield call(BankApi.createBank,action.payload);
        yield put(createDataBankRespons(result.data))
    } catch (err) {
        yield put(createDataBankRespons({message: err}))
    }
}

function* handleUpdateBank(action:any):any {
    try {
        const result:any = yield call(BankApi.updateBank,action.payload.id, action.payload.data);
        yield put(updateDataBankRespons(result.data))
    } catch (err) {
        yield put(updateDataBankRespons({message: err}))
    }
}



function* handleDeleteBank(action:any):any {
    try {
        const result:any = yield call(BankApi.deleteBank, action.payload);
        yield put(deleteDataBankRespons(result.data))
    } catch (err) {
        yield put(deleteDataBankRespons({message: err}))
    }
}
export {
    handleGetBank,
    handleCreateBank,
    handleUpdateBank,
    handleDeleteBank
}