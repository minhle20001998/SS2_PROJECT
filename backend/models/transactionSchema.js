const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
    _id: String,
    orderID: {
        type: String,
    },
    userID: {
        type: String,
    },
    totalPay: {
        type: Number
    },
    paid: {
        type: Boolean
    }
});

module.exports = mongoose.model("TransactionSchema", TransactionSchema);
