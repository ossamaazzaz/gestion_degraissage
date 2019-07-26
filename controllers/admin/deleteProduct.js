const mongoose = require("mongoose");
const Product = require("../../models/product");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = (req, res) => {
    Product.deleteOne({ _id: req.params.id }, (err) => {
        res.send({ success: true });
    });
}