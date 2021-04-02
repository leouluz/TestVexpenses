const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.send('Teste Api')
})
server.listen(3000)