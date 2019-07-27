const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: String,
    phone: String,
    price: Number,
    paid: Number,
    toPay: Number,
    content: String,
    state: String,
    created_at: { type: Date, default: Date.now },
    ready_at: Date,
    restored_at: Date
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;

