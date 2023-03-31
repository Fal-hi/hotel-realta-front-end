import axios from "../config"

const getEmployee = (
  page: number,
  entry: number,
  search?: string,
  status?: number
) => {
  return axios.get(
    `/hr/employee?search=${search}&page=${page}&entry=${entry}&status=${status}`
  )
}
interface Idata {
  general: string
  salary: string
  assigment: string
  shift: string
  image: any
}
const createEmployee = (data: Idata) => {
  return axios.post(`/hr/employee`, data)
}

const getEmployeeForUpdate = (id: number) => {
  return axios.get(`/hr/employee/${id}`)
}

const updateEmployee = (id: number, data: Idata) => {
  return axios.put(`/hr/employee/${id}`, data)
}

const getJobRoleOption = () => {
  return axios.get(`/hr/employee/job_role`)
}

const getDepartmentOption = () => {
  return axios.get(`/hr/employee/department`)
}

const getUsersForSearchOptionEmployee = (search: string) => {
  return axios.get(`/users/usersByName?search=${search}`)
}

const employeeApi = {
  createEmployee,
  getEmployeeForUpdate,
  updateEmployee,
  getJobRoleOption,
  getDepartmentOption,
  getUsersForSearchOptionEmployee,
}

export default employeeApi
