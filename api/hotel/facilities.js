import axios from "../config"

const getfaci = payload => {
  return axios.get(
    `/facilities/pagination/${payload.hotel_id}/${payload.paginationLocation}`
  )
}

const getfaciByName = payload => {
  return axios.get(
    `/facilities/pagination/${payload.hotel_id}/${payload.paginationLocation}/${payload.faciname}`
  )
}

const createFaci = data => {
  return axios.post("/facilities", data)
}
const updateFaci = payload => {
  console.log(payload)
  return axios.patch(`/facilities/${payload.id}`, payload.data)
}

const ApiMethod = {
  getfaci,
  getfaciByName,
  createFaci,
  updateFaci,
}

export default ApiMethod
