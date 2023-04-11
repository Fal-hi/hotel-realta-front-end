import axios from "../config"
// import axios from "axios"
type LoginEmployeeType = {
  email: string
  password: string
}

type RegisterEmployeeType = {
  username: string
  email: string
  password: string
  confirm_password: string
  phone_number: string
}

type RegisterOrLoginGuest = {
  phone_number: string
}

const loginEmployee = (data: any) => {
  return axios.post(
    "/auth/loginEmployee",
    { email: data.username, password: data.password },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )
}
const GetUsersById = (id: any) => {
  return axios.get(`/users/${id}`)
}

const loginGuest = (data: RegisterOrLoginGuest) => {
  const dataKirim = {
    phone_number: data,
  }
  return axios.post("/auth/loginGuest", dataKirim)
}
const registerEmployee = (data: RegisterEmployeeType) => {
  console.log("data", data)

  return axios.post("/users/signupEmployee", data)
}

const registerGuest = (data: RegisterOrLoginGuest) => {
  return axios.post("/users/signupGuest", data)
}

const pointMember = (id: number) => {
  return axios.get(`/user-bonus-points/${id}`)
}
const historyMember = (id: any) => {
  return axios.get(`/historyMembers/${id}`)
}

const updateGeneral = (id: any) => {
  return axios.get(`/users/update/${id}`)
}
const passwordUpdate = (id: any, data: any) => {
  return axios.get(`/changepassword/${id}`, data)
}

const apiMethodUsers = {
  GetUsersById,
  loginEmployee,
  registerEmployee,
  loginGuest,
  registerGuest,
  pointMember,
  historyMember,
  updateGeneral,
  passwordUpdate,
}

export default apiMethodUsers
