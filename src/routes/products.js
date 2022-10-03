const router = require("express").Router();
const productsControllers = require("../controllers/products");

// => /api/products/...
router.get("/", productsControllers.getAll);
router.get("/get/:id", productsControllers.getId);
router.get("/getName/:name", productsControllers.getName);
router.post("/add", productsControllers.create);
router.put("/update/:id", productsControllers.actualizarProd);
router.delete("/delete/:id", productsControllers.eliminarProd);

module.exports = router;