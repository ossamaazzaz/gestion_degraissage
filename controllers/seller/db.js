const mongoose = require("mongoose");
const Order = require("../../models/Order");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    try {
        var orders = await Order.find({ state: "to_prepare" });
        if (orders)
            orders = orders.reverse();
        res.render("seller.dashboard", { orders, page: "to_prepare" });
    } catch (error) {
        console.log(error)
    }


}