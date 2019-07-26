const mongoose = require("mongoose");
const Product = require("../../models/product");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    let id = req.body.id;
    let info = req.body;
    delete info.id;
    console.log(info);
    await Product.updateOne({ _id: id }, info);
    res.redirect("/admin/products");
}