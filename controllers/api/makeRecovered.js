const mongoose = require("mongoose");
const Order = require("../../models/Order");
const Info = require("../../models/info");
const Finance = require("../../models/finance");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    let info = await Info.findOne({});
    let allMoney = parseInt(info.money);
    let order = await Order.findOne({ _id: req.params.id });
    await Order.updateOne({ _id: req.params.id },
        {
            state: "recovered",
            restored_at: new Date()
        });
    allMoney += parseInt(order.toPay);
    await Info.updateOne({ _id: info._id }, { money: allMoney });
    await Finance.create({
        sign: "+",
        money: order.toPay,
        cause: "Client a payé lorsque il a récuperer la commande: " + order.id
    });
    res.send({ success: true });
}