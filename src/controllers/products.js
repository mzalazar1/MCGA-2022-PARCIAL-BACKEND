const Product = require("../models/Products");

//devuelve todos los productos
const getAll = async (req, res) => {
    let products = [];
    try {
        products = await Product.find({})
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({ msg: `Error: ${error}` });
    }
    res.json(products);
};

module.exports = {
    getAll
}