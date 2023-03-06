const express = require("express");
const router = express.Router();
const productsRoutes = require("./products");

const auth = require('./auth');

// productos
router.use('/products', productsRoutes);

//auth
router.use('/auth', auth);

module.exports = router;