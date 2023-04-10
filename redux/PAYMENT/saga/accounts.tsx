
import AccountApi from "@/api/payment/user_account";
import {call, put} from "redux-saga/effects"
import { createDataAccountsRespons, deleteDataAccountsRespons, getDataAccountsFintechRespons, getDataUserAccountsRespons, updateDataAccountsRespons } from "../action/userAccounts";

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
        const result:any = yield call(AccountApi.createAccount, action.payload);
   
        yield put(createDataAccountsRespons(result.data))
    } catch (err) {
        yield put(createDataAccountsRespons({message: err}))
    }
}

function* handleUpdateAccounts(action:any):any {
    try {
        console.log("texkid", action);
        
        const result:any = yield call(AccountApi.updateAccount,action.payload.id, action.payload.data);
   
        console.log("tess=>",result.data);
        
        yield put(updateDataAccountsRespons(result.data))
    } catch (err) {
        yield put(updateDataAccountsRespons({message: err}))
    }
}



function* handleDeleteAccounts(action:any):any {
    try {
        const result:any = yield call(AccountApi.deleteAccount, action.payload);
        yield put(deleteDataAccountsRespons(result.data))
    } catch (err) {
        yield put(deleteDataAccountsRespons({message: err}))
    }
}


function* handleGetAccountsFintech(action:any):any {
    try {
        const result:any = yield call(AccountApi.geAccountFintech, action.payload);
        yield put(getDataAccountsFintechRespons(result.data))
    } catch (err) {
        yield put(getDataAccountsFintechRespons({message: err}))
    }
}
export {
    handleGetAccounts,
    handleCreateAccounts,
    handleDeleteAccounts,
    handleGetAccountsFintech,
    handleUpdateAccounts
}