//NodeJS Standard Modules Import
const path = require('path');

//3PP imports
const express = require('express');

//Own developed modules Import

/**
 * CODE BEGINS
 */
const router = express.Router();

/* 
router.get('/', (req, res, next) => {
  console.log('In another middleware')
  res.send('<h1>Hello from express!</h1>')
})
*/

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views','shop.html'));
});

module.exports = router