const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product_name: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
  },
  
});

module.exports = mongoose.model("Products", ProductSchema);
