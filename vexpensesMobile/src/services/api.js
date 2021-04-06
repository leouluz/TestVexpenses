const axios = require('axios');

const instance = axios.create({
  baseUrl: "https://api.github.com"
})

export default instance;