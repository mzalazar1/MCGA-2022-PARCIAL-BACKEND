const router = require("express").Router();
const productsControllers = require("../controllers/products");

// => /api/products/...
router.get("/", productsControllers.getAll);
router.get("/get/:id", productsControllers.getId);
router.get("/getName/:name", productsControllers.getName);
router.get("/getNameOid", productsControllers.getNameOid);
router.post("/add", productsControllers.create);
router.put("/update/:id", productsControllers.actualizarProd);
router.delete("/delete/:id", productsControllers.eliminarProd);

module.exports = router;