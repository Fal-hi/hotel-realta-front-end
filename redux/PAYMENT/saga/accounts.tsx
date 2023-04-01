
import AccountApi from "@/api/payment/user_account";
import {call, put} from "redux-saga/effects"
import { createDataAccountsRespons, deleteDataAccountsRespons, getDataUserAccountsRespons, updateDataAccountsRespons } from "../action/userAccounts";

function* handleGetAccounts():any {
    try {
        const result:any = yield call(AccountApi.getUserAccount);
         
        yield put(getDataUserAccountsRespons(result.data.data))
    } catch (err) {
        yield put(getDataUserAccountsRespons({message: err}))
    }
}


function* handleCreateAccounts(action:any):any {
    try {
        const result:any = yield call(AccountApi.createAccount,action.payload);
        console.log("Handle =>",result.data)
        yield put(createDataAccountsRespons(result.data))
    } catch (err) {
        yield put(createDataAccountsRespons({message: err}))
    }
}

// function* handleUpdateAccounts(action:any):any {
//     try {
//         const result:any = yield call(AccountApi.updateAccount,action.payload);
//         yield put(updateDataAccountsRespons(result.data))
//     } catch (err) {
//         yield put(updateDataAccountsRespons({message: err}))
//     }
// }



function* handleDeleteAccounts(action:any):any {
    try {
        const result:any = yield call(AccountApi.deleteAccount, action.payload);
        yield put(deleteDataAccountsRespons(result.data))
    } catch (err) {
        yield put(deleteDataAccountsRespons({message: err}))
    }
}
export {
    handleGetAccounts,
    handleCreateAccounts,
    handleDeleteAccounts
}