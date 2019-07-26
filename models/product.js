const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    prixPent: Number,
    prixLav: Number
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

