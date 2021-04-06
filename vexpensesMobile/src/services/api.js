const axios = require('axios').default;

const api = axios.create({
  baseURL: "http://192.168.18.3:3000"
})

export default api;