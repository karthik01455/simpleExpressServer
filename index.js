const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  console.log('Hello, World!1')
  res.send('Hello, World!1')
})

app.listen(3000, () => {
  console.log('Express server listening on port 3000')
})
