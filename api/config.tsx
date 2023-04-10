import axios from "axios"

// console.log("ini => ", process.env.BACKEND_URL)

export default axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    "Content-Type": "application/json",
  },
})
