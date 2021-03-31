const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Cart = new Schema({
    _id: String,
    cartID: {
        type: String,
    },
    userID: {
        type: String
    },
    products: {
        type: Object
    }
});

module.exports = mongoose.model("Cart", Cart);

