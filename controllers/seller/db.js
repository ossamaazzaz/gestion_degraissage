const mongoose = require("mongoose");
const Order = require("../../models/Order");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    const orders = await Order.find({ state: "to_prepare" });
    res.render("seller.dashboard", { orders, page: "to_prepare" });
}