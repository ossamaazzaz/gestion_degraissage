const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = async (req, res) => {
    res.render("admin.finance");
}