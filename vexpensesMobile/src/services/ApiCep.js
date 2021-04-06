const axios = require('axios').default;

const instance = axios.create({
  baseURL: "https://viacep.com.br/ws"
})

export default instance;