import { all, takeEvery } from "redux-saga/effects";
import ActionTypePayment from "../action/actionTypePayment";
import { handleCreateAccounts, handleDeleteAccounts, handleGetAccounts } from "./accounts";
import { handleCreateBank, handleDeleteBank, handleGetBank, handleUpdateBank } from "./bank";
import { handleCreateFintech, handleDeleteFintech, handleGetFintech } from "./fintech";
import { handleGetTransaction } from "./transaction";

function* watchAll() {
  yield all([
    takeEvery(ActionTypePayment.GET_BANK, handleGetBank),
    takeEvery(ActionTypePayment.CREATE_BANK, handleCreateBank),
    takeEvery(ActionTypePayment.UPDATE_BANK, handleUpdateBank),
    takeEvery(ActionTypePayment.DELETE_BANK, handleDeleteBank),

    takeEvery(ActionTypePayment.GET_FINTECH, handleGetFintech),
    takeEvery(ActionTypePayment.CREATE_FINTECH, handleCreateFintech),
    // takeEvery(ActionTypePayment.UPDATE_FINTECH, handleUpdateFin),
    takeEvery(ActionTypePayment.DELETE_FINTECH, handleDeleteFintech),
    
    takeEvery(ActionTypePayment.GET_USER_ACCOUNTS, handleGetAccounts),
    takeEvery(ActionTypePayment.CREATE_USER_ACCOUNTS, handleCreateAccounts),
    takeEvery(ActionTypePayment.DELETE_USER_ACCOUNTS,handleDeleteAccounts),

    takeEvery(ActionTypePayment.GET_TRANSACTION, handleGetTransaction),
  ]);
}

export default watchAll;
