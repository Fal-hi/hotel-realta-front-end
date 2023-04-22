import ActionTypesBooking from "./actionTypeBooking"

export const doRequestGetListBooking = (payload: any) => {
  return {
    type: ActionTypesBooking.REQ_GET_ALL_LIST_BOOKING,
    payload,
  }
}

// export const doRequestGetListBooking = (...payload: any[]) => {
//   return {
//     type: ActionTypesBooking.REQ_GET_ALL_LIST_BOOKING,
//     payload: {
//       page: payload[0],
//       minSubTotal: payload[1],
//       maxSubTotal: payload[2],
//       cityName: payload[3],
//       provName: payload[4],
//       countryName: payload[5],
//       regionName: payload[6],
//       startDate: payload[7],
//       endDate: payload[8],
//       facilities_support_filter: payload[9],
//     },
//   }
// }

export const doResponseGetListBooking = (payload: any) => {
  return {
    type: ActionTypesBooking.RES_GET_ALL_LIST_BOOKING,
    payload,
  }
}

export const doRequestGetAllFacilitiesSupport = (): any => {
  return {
    type: ActionTypesBooking.REQ_GET_ALL_FACILITIES_SUPPORT,
  }
}

export const doResponseGetAllFacilitiesSupport = (payload: any) => {
  return {
    type: ActionTypesBooking.RES_GET_ALL_FACILITIES_SUPPORT,
    payload: payload,
  }
}

export const doRequestGetBookingByQuery = (payload: any) => {
  return {
    type: ActionTypesBooking.REQ_GET_ONE_BOOKING,
    payload,
  }
}

export const doResponseGetBookingyQuery = (payload: any) => {
  return {
    type: ActionTypesBooking.RES_GET_ONE_BOOKING,
    payload: payload,
  }
}

export const doRequestGetOtherRooms = (...payload: any[]) => {
  return {
    type: ActionTypesBooking.REQ_GET_OTHER_ROOMS,
    payload: {
      IdRoomNow: payload[0],
      NotRoomName: payload[1],
      IdCagro: payload[2],
    },
  }
}

export const doResponseGetOtherRooms = (payload: any) => {
  return {
    type: ActionTypesBooking.RES_GET_OTHER_ROOMS,
    payload: payload,
  }
}

export const doRequestGetCoupons = (payload: any) => {
  return {
    type: ActionTypesBooking.REQ_GET_COUPONS,
    payload,
  }
}

export const doResponseGetCoupons = (payload: any) => {
  return {
    type: ActionTypesBooking.RES_GET_COUPONS,
    payload,
  }
}
