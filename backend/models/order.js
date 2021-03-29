const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Order = new Schema({
    _id: String,
    orderID: {
        type: String,
    },
    productID: [
        {
            type: String,
        }
    ],
    quantity: [
        {
            type: Number,
        }
    ],
    order_date: {
        type: Number,
    },
});

module.exports = mongoose.model("Order", Order);

