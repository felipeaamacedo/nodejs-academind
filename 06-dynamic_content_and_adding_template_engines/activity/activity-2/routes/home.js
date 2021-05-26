const path = require('path')

const express = require('express')

const rootPath = require('../utils/rootPath')


const router = express.Router()
const userAdded = []

router.get('/', (req, res, next)=>{
  res.render('index', {
    pageTitle: 'Home'
    })
})

router.post('/', (req, res, next)=>{
  userAdded.push({userName: req.body.userName})
  res.redirect('/users')
})


exports.routes = router
exports.userAdded = userAdded