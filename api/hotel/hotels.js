import axios from "../config"

const get = () => {
  console.log("tes")
  return axios.get("/hotels")
}

const create = data => {
  return axios.post("/hotels", data)
}
const update = payload => {
  return axios.post(`/hotels/${payload.id}`, data)
}
const remove = id => {
  return axios.post(`/hotels/${id}`)
}

const ApiMethod = {
  get,
  create,
  update,
  remove,
}

export default ApiMethod
