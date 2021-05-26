const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js: ', adminData.products)

  //This command is useful to send file but not rendering templates
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  const products = adminData.products
  res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' })
});

module.exports = router;
