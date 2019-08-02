const mongoose = require("mongoose");
const Order = require("../models/Order");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    let content = JSON.parse(order.content);
    console.log(content);
    res.render("order", { order, content });
}