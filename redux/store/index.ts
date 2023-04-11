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
import stockReducers from "../PURCHASING/reducer/stockReducer"
import listOrderReducers from "../PURCHASING/reducer/listOrderReducer"
import loginReducers from "../USERS/reducer/loginReducer"
import passwordReducers from "../USERS/reducer/passwordReducer"
import generalReducers from "../USERS/reducer/generalReducer"
import registerReducers from "../USERS/reducer/registerReducer"
const logger = createLogger()
const saga = createSagaMiddleware()

const reducer = combineReducers({
  departmentReducers,
  hotelsReducers,
  addressReducers,
  bankReducers,
  fintechReducers,
  accountReducers,
  transactionReducers,
  vendorReducers,
  stockReducers,
  listOrderReducers,
  loginReducers,
  registerReducers,
  passwordReducers,
  generalReducers,
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
