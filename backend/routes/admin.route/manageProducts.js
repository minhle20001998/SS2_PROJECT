const express = require("express");
const router = express.Router();
const productManageController = require("../../controllers/admin-controller/productManage");
//middleware check if authority is admin
router.get("/products", productManageController.getProducts);
router.post("/products/create", productManageController.createProduct);
router.put("/products/updateOne", productManageController.updateProduct);
router.delete("/products/deleteOne/:id", productManageController.deleteProduct);

module.exports = router;
