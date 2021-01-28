const productSchema = require("../../models/productSchema");
const mongoose = require("mongoose");

class manageProductController {
  //get all products
  async getProducts(req, res) {
    try {
      const productDB = await productSchema.find({});
      res.json({
        products: productDB
      })
    } catch (err) {
      res.json({
        err: `${err}`
      })

    }
  }
  //create a product
  createProduct(req, res) {
    const product = new productSchema({
      _id: new mongoose.Types.ObjectId(),
      product_name: req.body.product_name,
      quantity: req.body.quantity,
      img: req.body.img,
      price: req.body.price,
      description: req.body.description
    });
    product.save().then((result) => {
      res.json({
        products: result,
      })
    }).catch((err) => {
      res.json({
        err: `${Object.keys(err.keyPattern)[0]}`,
      })
    });
  }
  //update a product
  async updateProduct(req, res) {
    try {
      const updatedProduct = await productSchema.findOneAndUpdate({ _id: req.body._id }, req.body.update, {
        new: true
      })
      res.json({
        products: updatedProduct
      })
    } catch (err) {
      res.json({
        err: `error ${err}`
      })
    }
  }
  //delete product
  async deleteProduct(req, res) {
    try {
      const deleteProduct = await productSchema.deleteOne({ _id: req.params.id });
      res.json({
        products: deleteProduct
      })
    } catch (err) {
      res.json({
        err: `error ${err}`
      })
    }
  }
}

module.exports = new manageProductController();
