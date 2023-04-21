import { configureStore } from "@reduxjs/toolkit"
import { combineReducers, Middleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import { departmentReducers } from "../HR/reducer/departmentReducer"
import { hotelsReducers } from "../HOTELS/reducer/hotelsReducers"
import { employeeReducers } from "../HR/reducer/employeeReducer"
import { workorderReducers } from "../HR/reducer/workorderReducer"

import { createLogger } from "redux-logger"
import rootSaga from "../sagaPublic/index"
import { accountReducers } from "../PAYMENT/reducer/accountsReducer"
import vendorReducers from "../PURCHASING/reducer/vendorReducer"
import stockReducers from "../PURCHASING/reducer/stockReducer"
import listOrderReducers from "../PURCHASING/reducer/listOrderReducer"
import { bankReducers } from "../PAYMENT/reducer/bankReducer"
import { fintechReducers } from "../PAYMENT/reducer/fintechReducer"
import { transactionReducers } from "../PAYMENT/reducer/transactionReducer"
import { adminRestoReducers } from "../RESTO/reducer/adminReducer"
import { restomenureducers } from "../RESTO/reducer/restomenuReducer"
import { orderrestoreducers } from "../RESTO/reducer/orderReducer"
import galleryReducers from "../PURCHASING/reducer/galleryReducer"
import { addressReducers } from "../HOTELS/reducer/addressReducers"
<<<<<<< HEAD
import { facilitiesReducers } from "../HOTELS/reducer/facilitesReducers"
import { facilitiesHistoryReducers } from "../HOTELS/reducer/facilityPriceHistoryReducers"
import bookingReducers from "../BOOKING/reducer/bookingReducer"
import bookingOneReducers from "../BOOKING/reducer/bookingOneReducer"
import facilitiesSupportBookingReducers from "../BOOKING/reducer/facilitiesSupportReducer"
import otherRoomsReducers from "../BOOKING/reducer/otherRoomsReducer"
import couponReducers from "../BOOKING/reducer/couponReducer"

>>>>>>> master
const logger = createLogger()
const saga = createSagaMiddleware()

const reducer = combineReducers({
  workorderReducers,
  departmentReducers,
  employeeReducers,
  hotelsReducers,
  addressReducers,
  facilitiesReducers,
  facilitiesHistoryReducers,

  bankReducers,
  vendorReducers,
  stockReducers,
  listOrderReducers,
<<<<<<< HEAD

  bookingReducers,
  bookingOneReducers,
  facilitiesSupportBookingReducers,
  otherRoomsReducers,
  couponReducers,
=======
  loginReducers,
  registerReducers,
  passwordReducers,
  generalReducers,
  fintechReducers,
  accountReducers,
  transactionReducers,
  adminRestoReducers,
  restomenureducers,
  orderrestoreducers,
  galleryReducers,
>>>>>>> master
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
