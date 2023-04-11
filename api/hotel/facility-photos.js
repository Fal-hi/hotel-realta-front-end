import axios from "../config"

const createFaciPhotos = data => {
  const headers = {
    "content-type": "multipart/form-data",
  }
  return axios.post("/facility-photos", data, {
    headers,
  })
}

const ApiMethod = {
  createFaciPhotos,
}

export default ApiMethod
