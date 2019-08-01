const mongoose = require("mongoose");
const Finance = require("../../models/finance");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    let operations = await Finance.find({});
    operations = operations.reverse();
    res.render("admin.finance", { operations });
}