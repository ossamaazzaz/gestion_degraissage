const mongoose = require("mongoose");
const Order = require("../../models/Order");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    req.body.toPay = parseInt(req.body.price) - parseInt(req.body.paid);
    req.body.state = "to_prepare";
    await Order.create(req.body);
    res.redirect("/");
}