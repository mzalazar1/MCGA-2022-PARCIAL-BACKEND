const Product = require("../models/Products");

//get para todos los productos
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

// Get para traer por id
const getId = async (req, res) => {
    let products = [];
    let id = req.params.id;
    try {
        products = await Product.find({ id })
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({ msg: `Error: ${error}` });
    }
    res.json(products);
}

//Get para traer por nombre
const getName = async (req, res) => {
    let products = [];
    let name = req.params.name;
    try {
        products = await Product.find({ name })
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({ msg: `Error: ${error}` });
    }
    res.json(products);
}

//crear producto
const create = async (req, res) => {
    const { id, name, price, stock, description } = req.body;
    const producto = new Product({
        id,
        name,
        price,
        stock,
        description,
    });
    let savedProduct;
    try {
        savedProduct = await producto.save();
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.json({ msg: `Error Post: ${err}` })
    }
    res.json(savedProduct);
}

// Actualizar
const actualizarProd = async (req, res) => {
    const id = req.params.id;
    const { name, price, stock, description } = req.body;
    console.log(id);
    let productoAct;
    try {
        productoAct = await Product.updateOne(
            { "id": id },
            {
                $set: {
                    name: name,
                    price: price,
                    stock: stock,
                    description: description,
                }
            }
        );
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.json({ msg: `Error Update: ${err}` });
    }
    res.json(productoAct);
};


//Borrar
eliminarProd = async (req, res) => {
    const id = req.params.id;
    let response;
    try {
        response = await Product.deleteOne({ id });
        console.log(response);
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.json({ msg: `Error Delete: ${err}` });
    }
    if (response.deletedCount === 0) {
        return res.json({ msg: `No se encontro producto con id: ${id}` });
    }

    return res.json({ msg: `El producto borrado ${id}` });
};

module.exports = {
    getAll,
    create,
    actualizarProd,
    eliminarProd,
    getId,
    getName
}