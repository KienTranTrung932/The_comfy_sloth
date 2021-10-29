import axios from "axios"

export let endpoints = {
   "oauth2-info":"/oauth2-info/",
   "login":"/o/token",
   "current-user":"/User/current-user/",
   "rating" : (id) =>`/SanPham/${id}/rating`
  }

  export default axios.create({
    baseUrl:"http://127.0.0.1:8000/"
})