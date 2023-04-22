import axios from "../config"

const getAllBookingApi = (
  page: string = "",
  minSubTotal: string = "",
  cityName: string = "",
  provName: string = "",
  countryName: string = "",
  regionName: string = "",
  startDate: string = "",
  endDate: string = "",
  facilities_support_filter: string = ""
) => {
  let fasuf = ""
  if (facilities_support_filter) {
    fasuf = `facilities_support_filter&${facilities_support_filter}`
  }
  return axios.get(
    `/bookhotels?page=${page}&minSubtotal=${minSubTotal}&maxSubTotal=${minSubTotal}&cityName=${cityName}&provName=${provName}&countryName=${countryName}&regionName=${regionName}&startDate=${startDate}&endDate=${endDate}${fasuf}`
  )
}

const getBookingByQuery = (
  idRooms = "",
  idHotel = "",
  startDate = "",
  endDate = "",
  dataRooms = "",
  guestRooms = ""
) => {
  let quDataRoom = ""
  let quGuestRooms = ""
  if (dataRooms && guestRooms) {
    quDataRoom = `&dataRooms=${dataRooms}`
    quGuestRooms = `&guestRooms=${guestRooms}`
  }
  return axios.get(
    `/bookhotels/hotel/${idHotel}/room/${idRooms}?startDate=${startDate}&endDate=${endDate}${quDataRoom}${quGuestRooms}`
  )
}

const getAllFacilitiesSupport = () => {
  return axios.get("/facilities-support")
}

const getListOtherRooms = ({ IdRoomNow, NotRoomName, IdCagro }: any) => {
  return axios.get(
    `/booking/hotel/${IdRoomNow}/room/?NotRoomName=${NotRoomName}&IdCagro=${IdCagro}`
  )
}

const getCoupons = (IdBoor: number) => {
  return axios.get(`/bookhotels/hotel/room/coupon/${IdBoor}`)
}

const bookingApi = {
  getAllBookingApi,
  getAllFacilitiesSupport,
  getBookingByQuery,
  getListOtherRooms,
  getCoupons,
}

export default bookingApi
