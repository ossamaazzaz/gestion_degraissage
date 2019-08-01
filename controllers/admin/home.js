const mongoose = require("mongoose");
const Info = require("../../models/info");
const Order = require("../../models/Order");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    let info = await Info.findOne({});
    let orders = await Order.find({}).limit(6);
    let toPrepare = await Order.find({ state: "to_prepare" });
    let prepared = await Order.find({ state: "prepared" });
    let restored = await Order.find({ state: "recovered" });
    res.render("admin.home", {
        page: "home",
        money: parseInt(info.money),
        orders,
        toPrepare: toPrepare.length,
        prepared: prepared.length,
        restored: restored.length
    });
}