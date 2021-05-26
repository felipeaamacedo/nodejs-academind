const path = require('path');

const express = require('express');

const producsController = require('../controllers/products')

const router = express.Router();

router.get('/', producsController.getProducts);

module.exports = router;
