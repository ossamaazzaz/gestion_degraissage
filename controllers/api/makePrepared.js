const mongoose = require("mongoose");
const Order = require("../../models/Order");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    await Order.updateOne({ _id: req.params.id },
        {
            state: "prepared",
            ready_at: new Date()
        });
    res.send({ success: true });
}