import axios from "axios"

export let endpoints = {
   "rating" : (id) =>`/SanPham/${id}/rating/`,
  //  "comments": (id)=> `/SanPham/${id}/comments/`
  }

  export default axios.create({
    baseUrl:"http://127.0.0.1:8000/"
})