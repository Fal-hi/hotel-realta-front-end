// import { fork, all } from "redux-saga/effects"
// import hrSaga from "../HR/saga/index"
// import hotelSaga from "../HOTELS/saga/index"

// export default function* rootSaga() {
//   yield fork(hrSaga)
//   yield fork(hotelSaga)

//   // code after fork-effect
// }

import { fork, all } from "redux-saga/effects"
import hrSaga from "../HR/saga/index"
import hotelSaga from "../HOTELS/saga/index"
import paymentSaga from "../PAYMENT/saga/index"
import restoSaga from "../RESTO/saga/index"
import purchasingSaga from "../PURCHASING/saga/index"
import bookingSaga from "../BOOKING/saga/index"

import usersSaga from "../USERS/saga/index"

export default function* rootSaga() {
  yield all([
    hrSaga(),
    hotelSaga(),
    paymentSaga(),
    purchasingSaga(),
    bookingSaga(),
    usersSaga(),
    restoSaga(),
  ])
  // code after fork-effect
}
