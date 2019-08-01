const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
    money: Number
});

const info = mongoose.model("info", infoSchema);

module.exports = info;

