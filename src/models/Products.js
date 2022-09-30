const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductsSchema = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("Product", ProductsSchema);