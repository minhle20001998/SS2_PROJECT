const productSchema = require("../../models/productSchema");
const mongoose = require("mongoose");
const multer = require('multer');

class manageProductController {
  //get specifict products
  async getProduct(req, res) {
    const { id } = req.params;
    const productDB = await productSchema.find({ _id: id });
    try {
      res.json({
        products: productDB
      })
    } catch (err) {
      res.json({
        err: `${err}`
      })
    }
  }

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
    const product_image = [];
    const images = [];
    if (req.files) {
      req.files.map((image) => {
        images.push(image.path)
      })
    }
    const colors = req.body.colors;
    product_image.push(colors);
    product_image.push(images);
    const product = new productSchema({
      _id: new mongoose.Types.ObjectId().toHexString(),
      product_name: req.body.product_name,
      quantity: req.body.quantity,
      product_image: product_image,
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
