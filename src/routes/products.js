const router = require("express").Router();
const productsControllers = require("../controllers/products");

// => /api/products/...
router.get("/", productsControllers.getAll);

module.exports = router;