//NodeJS Standard Modules Import
const path = require('path');
//3PP imports
const express = require('express');

//Own developed modules Import

/**
 * CODE BEGINS
 */
const router = express.Router()


// /admin/add-product => GET
/*
router.get('/add-product', (req, res, next) => {
  res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});
*/

router.get('/add-product', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
})


// /admin/add-product => POST
//APP.POST() already filter only post requests, if we use the previous sintax with APP.USE() get requests would also call this.
router.post('/add-product', (req, res, next)=> {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router