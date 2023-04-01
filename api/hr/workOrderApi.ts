import axios from "../config"

const getWorkOrder = (
  page: number,
  entry: number,
  status: string,
  from: Date,
  to: Date
) => {
  axios.get(
    `hr/workorder?page=${page}&entry=${entry}&status=${status}&from=${from}&to=${to}`
  )
}

const getWorkOrderForUpdate = (id: number) => {
  axios.get(`hr/workorder/${id}`)
}

interface IData {
  userid: number
  startDate: Date
}
const createWorkOrder = (data: IData) => {
  axios.post(`/hr/workorder`, data)
}

const updateWorkOrder = (id: number, data: IData) => {
  axios.put(`/hr/workorder/${id}`, data)
}

const getWorkOrderDetail = (id: number) => {
  axios.get(`/hr/workorder/detail/${id}`)
}

interface IDataWorkOrder {
  taskId: number
  assignTo: number
  notes: string
  faciId: number
  workOrderId: number
}
const createWorkOrderDetail = (data: IDataWorkOrder) => {
  axios.post(`/hr/workorder/detail/`, data)
}

const getEmployeeNameOption = (namelike: string) => {
  axios.get(`/hr/workorder/employee?namelike=${namelike}`)
}

const getTaskName = (tasklike: string) => {
  axios.get(`/hr/workorder/task?tasklike=${tasklike}`)
}

const workOrderApi = {
  getWorkOrder,
  getWorkOrderForUpdate,
  createWorkOrder,
  updateWorkOrder,
  getWorkOrderDetail,
  createWorkOrderDetail,
  getEmployeeNameOption,
  getTaskName,
}
export default workOrderApi
