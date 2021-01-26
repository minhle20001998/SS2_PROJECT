const productSchema = require("../../models/productSchema");
const mongoose = require("mongoose");

class manageProductController {
  getProduct() {}
  createProduct(req, res) {
    console.log("-----------------", req.body);
    const product = new productSchema({
      _id: new mongoose.Types.ObjectId(),
      product_name: req.body.product_name,
      quantity: req.body.quantity,
      img: req.body.img, //
      price: req.body.price,
    });
    product
      .save()
      .then((result) => {
        res.json({
          message: result,
        });
      })
      .catch((err) => {
        res.json({
          message: `${Object.keys(err.keyPattern)[0]}`,
        });
      });
  }
  updateProduct() {}
  deleteProduct() {}
}

module.exports = new manageProductController();
