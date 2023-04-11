import axios from "../config"

const getfaciHistory = payload => {
  return axios.get(
    `/facility-price-history/pagination/${payload.faci_id}/${payload.paginationLocation}`
  )
}

const getfaciHistoryByOrder = payload => {
  return axios.get(
    `/facility-price-history/pagination/${payload.faci_id}/${payload.paginationLocation}/${payload.orderby}`
  )
}

const ApiMethod = {
  getfaciHistory,
  getfaciHistoryByOrder,
}

export default ApiMethod
