const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  _id: String,
  product_name: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  product_image: [
    [String], [String]
  ],
  price: {
    type: Number,
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Products", ProductSchema);
