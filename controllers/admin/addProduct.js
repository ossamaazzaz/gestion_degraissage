const mongoose = require("mongoose");
const Product = require("../../models/product");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    console.log(req.body);
    await Product.create(req.body);
    res.redirect("/admin/products");
}