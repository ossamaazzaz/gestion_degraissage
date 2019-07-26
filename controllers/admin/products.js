const mongoose = require("mongoose");
const Product = require("../../models/product");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    const products = await Product.find({});
    res.render("admin.products", { products });
}