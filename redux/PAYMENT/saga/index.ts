import { all, takeEvery } from "redux-saga/effects";
import ActionTypePayment from "../action/actionTypePayment";
import { handleCreateAccounts, handleDeleteAccounts, handleGetAccounts, handleGetAccountsFintech, handleUpdateAccounts } from "./accounts";
import { handleCreateBank, handleDeleteBank, handleGetBank, handleUpdateBank } from "./bank";
import { handleCreateFintech, handleDeleteFintech, handleGetFintech, handleUpdateFintech } from "./fintech";
import { handleCreateTopUpTransaction, handleGetTopUpTransaction, handleGetTransaction } from "./transaction";

function* watchAll() {
  yield all([
    takeEvery(ActionTypePayment.GET_BANK, handleGetBank),
    takeEvery(ActionTypePayment.CREATE_BANK, handleCreateBank),
    takeEvery(ActionTypePayment.UPDATE_BANK, handleUpdateBank),
    takeEvery(ActionTypePayment.DELETE_BANK, handleDeleteBank),

    takeEvery(ActionTypePayment.GET_FINTECH, handleGetFintech),
    takeEvery(ActionTypePayment.CREATE_FINTECH, handleCreateFintech),
    takeEvery(ActionTypePayment.UPDATE_FINTECH, handleUpdateFintech),
    takeEvery(ActionTypePayment.DELETE_FINTECH, handleDeleteFintech),
    
    takeEvery(ActionTypePayment.GET_USER_ACCOUNTS, handleGetAccounts),
    takeEvery(ActionTypePayment.GET_ACCOUNTS_FINTECH, handleGetAccountsFintech),
    takeEvery(ActionTypePayment.CREATE_USER_ACCOUNTS, handleCreateAccounts),
    takeEvery(ActionTypePayment.UPDATE_USER_ACCOUNTS, handleUpdateAccounts),
    takeEvery(ActionTypePayment.DELETE_USER_ACCOUNTS,handleDeleteAccounts),

    takeEvery(ActionTypePayment.GET_TRANSACTION, handleGetTransaction),
    takeEvery(ActionTypePayment.GET_TRANSACTION_TOPUP, handleGetTopUpTransaction),
    takeEvery(ActionTypePayment.CREATE_TRANSACTION_TOPUP, handleCreateTopUpTransaction),
  ]);
}

export default watchAll;
