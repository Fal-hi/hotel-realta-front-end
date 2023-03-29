import { all, takeEvery } from "redux-saga/effects";
import ActionTypePayment from "../action/actionTypePayment";
import { handleGetAccounts } from "./accounts";
import { handleGetBank } from "./bank";
import { handleGetFintech } from "./fintech";
import { handleGetTransaction } from "./transaction";

function* watchAll() {
  yield all([
    takeEvery(ActionTypePayment.GET_BANK, handleGetBank),
    takeEvery(ActionTypePayment.GET_FINTECH, handleGetFintech),
    takeEvery(ActionTypePayment.GET_USER_ACCOUNTS, handleGetAccounts),
    takeEvery(ActionTypePayment.GET_TRANSACTION, handleGetTransaction),
  ]);
}

export default watchAll;
