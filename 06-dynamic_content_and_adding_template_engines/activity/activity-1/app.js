const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const homeData = require('./routes/home')
const usersData = require('./routes/users')
const rootPath = require('./utils/rootPath')


const app = express();
const port = 3000

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))

app.use(usersData.routes)
app.use(homeData.routes)

app.listen(port, ()=>{
  console.log(`App is being listening in port https://localhost:${port}`)
})