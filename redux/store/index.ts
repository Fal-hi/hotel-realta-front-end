import { configureStore } from "@reduxjs/toolkit"
import { combineReducers, Middleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import { departmentReducers } from "../HR/reducer/departmentReducer"
import { hotelsReducers } from "../HOTELS/reducer/hotelsReducers"

import { createLogger } from "redux-logger"
import rootSaga from "../sagaPublic/index"
import { accountReducers } from "../PAYMENT/reducer/accountsReducer"
import { bankReducers } from "../PAYMENT/reducer/bankReducer"
import { fintechReducers } from "../PAYMENT/reducer/fintechReducer"
import { transactionReducers } from "../PAYMENT/reducer/transactionReducer"
import vendorReducers from "../PURCHASING/reducer/vendorReducer"
import { addressReducers } from "../HOTELS/reducer/addressReducers"
import { facilitiesReducers } from "../HOTELS/reducer/facilitesReducers"
import stockReducers from "../PURCHASING/reducer/stockReducer"
import listOrderReducers from "../PURCHASING/reducer/listOrderReducer"
import bookingReducers from "../BOOKING/reducer/bookingReducer"
import bookingOneReducers from "../BOOKING/reducer/bookingOneReducer"
import facilitiesSupportBookingReducers from "../BOOKING/reducer/facilitiesSupportReducer"
import otherRoomsReducers from "../BOOKING/reducer/otherRoomsReducer"
import couponReducers from "../BOOKING/reducer/couponReducer"

const logger = createLogger()
const saga = createSagaMiddleware()

const reducer = combineReducers({
  departmentReducers,

  hotelsReducers,
  addressReducers,
  facilitiesReducers,

  bankReducers,
  fintechReducers,
  accountReducers,
  transactionReducers,
  vendorReducers,
  stockReducers,
  listOrderReducers,

  bookingReducers,
  bookingOneReducers,
  facilitiesSupportBookingReducers,
  otherRoomsReducers,
  couponReducers,
})

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(logger)
      .concat(saga),
})

saga.run(rootSaga)

export default store
