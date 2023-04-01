
import FintechApi from "@/api/payment/fintechApi";

import {call, put} from "redux-saga/effects"
import { createDataFintechRespons, deleteDataFintechRespons, getDataFintechRespons, updateDataFintechRespons } from "../action/fintech";

function* handleGetFintech(action:any):any {
    try {
        const result:any = yield call(FintechApi.getFintech,action.payload);     
        yield put(getDataFintechRespons(result.data.data))
    } catch (err) {
        yield put(getDataFintechRespons({message: err}))
    }
}


function* handleCreateFintech(action:any):any {
    try {
        const result:any = yield call(FintechApi.createFintech,action.payload);
        yield put(createDataFintechRespons(result.data))
    } catch (err) {
        yield put(createDataFintechRespons({message: err}))
    }
}

// function* handleUpdateFintech(action:any):any {
//     try {
//         const result:any = yield call(FintechApi.,action.payload);
//         yield put(updateDataFintechRespons(result.data))
//     } catch (err) {
//         yield put(updateDataFintechRespons({message: err}))
//     }
// }



function* handleDeleteFintech(action:any):any {
    try {
        const result:any = yield call(FintechApi.deleteFintech, action.payload);
        yield put(deleteDataFintechRespons(result.data))
    } catch (err) {
        yield put(deleteDataFintechRespons({message: err}))
    }
}

export {
    handleGetFintech,
    handleCreateFintech,
    handleDeleteFintech
}