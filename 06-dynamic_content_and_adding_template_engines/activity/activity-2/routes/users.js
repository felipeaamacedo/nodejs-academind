const express = require('express')

const userData = require('./home')

const router = express.Router()

router.get('/users', (req, res, next) => {
  const usersData = userData.userAdded
  console.log(usersData)
  res.render('users', {
    pageTitle: 'Users page',
    users: usersData
  })
})

exports.routes = router

