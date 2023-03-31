import axios from "axios"

// console.log("ini => ", process.env.BACKEND_URL)

export default axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
})
