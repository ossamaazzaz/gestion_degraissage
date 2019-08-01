const mongoose = require("mongoose");
const Order = require("../../models/Order");
const Info = require("../../models/info");
const Finance = require("../../models/finance");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    if (req.body.paid == "") {
        req.body.paid = 0
    }
    req.body.toPay = parseInt(req.body.price) - parseInt(req.body.paid);
    req.body.state = "to_prepare";
    let info = await Info.findOne({});
    let allMoney = parseInt(info.money);
    allMoney += parseInt(req.body.paid);
    await Info.updateOne({ _id: info._id }, { money: allMoney })
    let order = await Order.create(req.body);
    await Finance.create({
        sign: "+",
        money: req.body.paid,
        cause: "Client a payé lorsque il pose la commande: " + order.id
    });
    res.redirect("/");
}