
import FintechApi from "@/api/payment/fintechApi";
import TransactionApi from "@/api/payment/transaction";

import {call, put} from "redux-saga/effects"
import { createDataTopUpRespons, getDataTopUpRespons, getDataTransactionRespons } from "../action/transaction";
import Swal from "sweetalert2";

function* handleGetTransaction(action:any):any {
    try {
        const { search, page, limit, type } = action.payload
        const result:any = yield call(TransactionApi.getTransaction,search,page,limit,type);             
        yield put(getDataTransactionRespons (result.data))
    } catch (err) {
        yield put(getDataTransactionRespons({message: err}))
    }
}


function* handleGetTopUpTransaction(action:any):any {
    try {
        const { search, page, limit} = action.payload
        const result:any = yield call(TransactionApi.getHistoryTransaction,search,page,limit);     
        yield put(getDataTopUpRespons (result.data))
    } catch (err) {
        yield put(getDataTopUpRespons({message: err}))
        
    }
}

function* handleCreateTopUpTransaction(action:any):any {
    try {
        const result:any = yield call(TransactionApi.createTopup,action.payload);     
        yield put(createDataTopUpRespons (result.data))
        Swal.fire({
            title: 'Sukses',
            text: `Berhasil TopUp`,
            icon: 'success',
          });
    } catch (err) {
        yield put(createDataTopUpRespons({message: err}))
        
    }
}

export {
    handleGetTransaction,
    handleGetTopUpTransaction,
    handleCreateTopUpTransaction
}