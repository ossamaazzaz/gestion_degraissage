const mongoose = require("mongoose");
const Product = require("../../models/product");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    const products = await Product.find({});

    var names = [];
    var lavPrices = [];
    var pentPrices = [];

    for (let i = 0; i < products.length; i++) {
        names.push(products[i].name);
        lavPrices.push(products[i].prixLav);
        pentPrices.push(products[i].prixPent);
    }

    var response = [names, lavPrices, pentPrices];
    res.send(response);
}