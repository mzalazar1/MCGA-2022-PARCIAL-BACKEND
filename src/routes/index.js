const express = require("express");
const router = express.Router();
const productsRoutes = require("./products");

// productos
router.use('/products', productsRoutes);


module.exports = router;