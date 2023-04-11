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
import { addressReducers } from "../HOTELS/reducer/addressReducers"
import { facilitiesReducers } from "../HOTELS/reducer/facilitesReducers"
import stockReducers from "../PURCHASING/reducer/stockReducer"
import listOrderReducers from "../PURCHASING/reducer/listOrderReducer"
import { bankReducers } from "../PAYMENT/reducer/bankReducer"
import { fintechReducers } from "../PAYMENT/reducer/fintechReducer"
import { transactionReducers } from "../PAYMENT/reducer/transactionReducer"
import { adminRestoReducers } from "../RESTO/reducer/adminReducer"
import { restomenureducers } from "../RESTO/reducer/restomenuReducer"
import { orderrestoreducers } from "../RESTO/reducer/orderReducer"
import galleryReducers from "../PURCHASING/reducer/galleryReducer"

const logger = createLogger()
const saga = createSagaMiddleware()

const reducer = combineReducers({
  workorderReducers,
  departmentReducers,
  employeeReducers,
  hotelsReducers,
  addressReducers,
  facilitiesReducers,

  bankReducers,
  vendorReducers,
  stockReducers,
  listOrderReducers,
  fintechReducers,
  accountReducers,
  transactionReducers,
  adminRestoReducers,
  restomenureducers,
  orderrestoreducers,
  galleryReducers,
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
