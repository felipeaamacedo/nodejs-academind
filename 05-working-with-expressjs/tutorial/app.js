const path = require('path')
const express = require('express');
const bodyParser = require('body-parser')

//own files import
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

//Command to add static pages. It is important to put everything at a public folder, and when using link tag, do not mention the public, only the folders within it where the link file you want is located.
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

/*
app.use((req, res, next)=>{
  res.status(404).send('<h1>Page not found</h1>')
})
*/

app.use((req, res, next)=>{
  res
    .status(404)
    .sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
})


app.listen(3000)