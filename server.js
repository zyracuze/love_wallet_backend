const express = require('express')
const app = express()

const hello = require('./modules/hello')
app.get('/', function (req, res) {
  res.json(hello())
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})