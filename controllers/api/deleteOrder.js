const mongoose = require("mongoose");
const Order = require("../../models/Order");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    console.log("sf");
    await Order.deleteOne({ _id: req.params.id });
    res.send({ success: true });
}