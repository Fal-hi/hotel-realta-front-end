import axios from "axios"

// console.log("ini => ", process.env.URL_BACKEND);

export default axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
})
