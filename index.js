const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  console.log('Hello, World!1')
  res.send('Hello, World!1')
})
app.get('/colors', (req, res) => {
  console.log('colors')
  res.send('colors')
})
app.get('/user', (req, res) => {
  console.log('user')
  res.send('user')
})

app.listen(3000, () => {
  console.log('Express server listening on port 3000')
})
