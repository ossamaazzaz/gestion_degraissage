const mongoose = require("mongoose");
const Finance = require("../../models/finance");
const Info = require("../../models/info");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    let info = await Info.findOne({});
    let money = parseInt(info.money);
    if (req.body.sign == "+") {
        money += parseInt(req.body.money);
    }
    else {
        money -= parseInt(req.body.money);
    }
    await Info.updateOne({ _id: info._id }, { money });
    await Finance.create(req.body);
    res.redirect("/admin/finance");
}