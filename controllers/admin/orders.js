const mongoose = require("mongoose");
const Order = require("../../models/Order");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    const orders = await Order.find({});
    res.render("admin.orders", { 
        orders ,
        page: "orders"
    });
}