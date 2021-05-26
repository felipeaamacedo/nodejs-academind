const path = require('path')

const express = require('express');

/**
 * BEGIN OF CODE
 */
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'users.html'))
})

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'main.html'))
})

app.listen(3000)