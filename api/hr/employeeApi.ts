import { AxiosResponse } from "axios"
import axios from "../config"

interface Iresponse {
  statusCode: number
  message: string
  data: any
}

const getEmployee = (
  page: number,
  entry: number,
  search: string = "",
  status: string = ""
): Promise<AxiosResponse<Iresponse, Iresponse>> => {
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

const createEmployee = (data: any): Promise<AxiosResponse<Iresponse, any>> => {
  console.log("data", data)
  return axios.post(`/hr/employee`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

const getEmployeeForUpdate = (
  id: number
): Promise<AxiosResponse<Iresponse, any>> => {
  return axios.get(`/hr/employee/${id}`)
}

const updateEmployee = (
  id: number,
  data: Idata
): Promise<AxiosResponse<Iresponse, any>> => {
  return axios.put(`/hr/employee/${id}`, data)
}

const getJobRoleOption = (): Promise<AxiosResponse<Iresponse, any>> => {
  return axios.get(`/hr/employee/job_role`)
}

const getDepartmentOption = (): Promise<AxiosResponse<Iresponse, any>> => {
  return axios.get(`/hr/employee/department`)
}

const getUsersForSearchOptionEmployee = (
  search: string
): Promise<AxiosResponse<Iresponse, any>> => {
  return axios.get(`/users/usersByName?search=${search}`)
}

const getUserForProfiles = (id: number): any => {
  return axios.get(`/users/profile/${id}`)
}
const getShift = (search: string): any => {
  return axios.get(`/hr/employee/shift?search=${search}`)
}
const getShiftById = (id: number): any => {
  return axios.get(`/hr/employee/shift/${id}`)
}

const employeeApi = {
  createEmployee,
  getEmployee,
  getEmployeeForUpdate,
  updateEmployee,
  getJobRoleOption,
  getDepartmentOption,
  getUsersForSearchOptionEmployee,
  getUserForProfiles,
  getShift,
  getShiftById,
}

export default employeeApi
