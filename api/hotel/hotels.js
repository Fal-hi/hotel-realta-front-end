import axios from "../config"

const get = offset => {
  return axios.get(`/hotels/pagination/${offset}`)
}

const getOne = id => {
  return axios.get(`/hotels/${id}`)
}

const getByHotelName = payload => {
  // console.log(payload)
  return axios.get(
    `/hotels/pagination/${payload.paginationLocation}/${payload.search}`
  )
}

const searchAddress = addr => {
  return axios.get(`/hotels/address/${addr}`)
}

const getAddress = addr_id => {
  // console.log(addr_id)
  return axios.get(`/hotels/addressinfo/${addr_id}`)
}

const create = data => {
  return axios.post("/hotels", data)
}
const update = payload => {
  // console.log(payload)
  return axios.patch(`/hotels/${payload.id}`, payload.data)
}
const remove = id => {
  return axios.post(`/hotels/${id}`)
}

const ApiMethod = {
  get,
  getOne,
  create,
  update,
  searchAddress,
  getAddress,
  remove,
  getByHotelName,
}

export default ApiMethod
