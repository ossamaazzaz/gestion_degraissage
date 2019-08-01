const mongoose = require("mongoose");
const Order = require("../../models/Order");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    var orders = await Order.find({ state: "prepared" });
    if (orders)
        orders = orders.reverse();
    res.render("seller.prepared", { orders, page: "prepared" });
}