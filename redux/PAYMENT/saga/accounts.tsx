
import AccountApi from "@/api/payment/user_account";
import {call, put} from "redux-saga/effects"
import { getDataUserAccountsRespons } from "../action/userAccounts";

function* handleGetAccounts():any {
    try {
        const result:any = yield call(AccountApi.getUserAccount);
         
        yield put(getDataUserAccountsRespons(result.data.data))
    } catch (err) {
        yield put(getDataUserAccountsRespons({message: err}))
    }
}

export {
    handleGetAccounts
}