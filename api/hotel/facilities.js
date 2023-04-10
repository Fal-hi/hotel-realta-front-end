import axios from "../config"

const getfaci = payload => {
  console.log(payload)
  return axios.get(
    `/facilities/pagination/${payload.hotel_id}/${payload.paginationLocation}`
  )
}

const getfaciByName = payload => {
  console.log(payload)
  return axios.get(
    `/facilities/pagination/${payload.hotel_id}/${payload.paginationLocation}/${payload.faciname}`
  )
}

const ApiMethod = {
  getfaci,
  getfaciByName,
}

export default ApiMethod
