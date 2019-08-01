const mongoose = require("mongoose");
const User = require("../../models/user");
mongoose.connect("mongodb://localhost/degraissage", { useNewUrlParser: true });

module.exports = (req, res) => {
    res.render("admin.home", {
        page: "home"
    });
}