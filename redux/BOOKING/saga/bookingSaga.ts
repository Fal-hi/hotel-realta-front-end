import bookingApi from "@/api/booking/bookingApi"
import { call, put } from "redux-saga/effects"
import {
  doResponseGetBookingyQuery,
  doResponseGetListBooking,
  doResponseGetOtherRooms,
} from "../action/booking"

function* handleGetAllListBooking(action: any): any {
  try {
    console.log("action.payload", action)

    const data = {
      page: action.payload.page,
      minSubTotal: action.payload.minSubTotal,
      maxSubTotal: action.payload.maxSubTotal,
      cityName: action.payload.cityName,
      provName: action.payload.provName,
      countryName: action.payload.countryName,
      regionName: action.payload.regionName,
      startDate: action.payload.startDate,
      endDate: action.payload.endDate,
      facilities_support_filter: action.payload.facilities_support_filter,
    }

    const result = yield call(
      bookingApi.getAllBookingApi,
      data.page,
      data.minSubTotal,
      data.cityName,
      data.provName,
      data.countryName,
      data.regionName,
      data.startDate,
      data.endDate,
      data.facilities_support_filter
    )
    console.log("result.data", result.data.dataResponse)
    yield put(doResponseGetListBooking(result.data))
  } catch (e: any) {
    console.log(e)
  }
}

// function* handleGetAllListBooking(action: any): Generator {
//   try {
//     const result: any = yield call(bookingApi.getAllBookingApi, action.payload)
//     console.log("result.data", result.data.dataResponse)
//     // if (result.data.statusCode === 200) {
//     yield put(doResponseGetListBooking(result.data.dataResponse))
//     // }
//   } catch (e: any) {
//     console.log(e)
//   }
// }

function* handleGetOneBooking(action: any): Generator {
  try {
    const result: any = yield call(
      bookingApi.getBookingByQuery,
      action.payload.idRooms,
      action.payload.idHotel
    )
    console.log("result", result)
    yield put(doResponseGetBookingyQuery(result.data))
  } catch (e: any) {
    console.log(e)
  }
}

export { handleGetAllListBooking, handleGetOneBooking }
