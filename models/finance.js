const mongoose = require("mongoose");

const financeSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    cause: String,
    sign: String,
    money: Number
});

const finance = mongoose.model("finance", financeSchema);

module.exports = finance;

