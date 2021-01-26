const express = require("express");
const router = express.Router();
const productManageController = require("../../controllers/admin-controller/productManage");
//middleware check if authority is admin
router.get("/products", productManageController.getProduct);
router.post("/products", productManageController.createProduct);
router.put("/products", productManageController.updateProduct);
router.delete("/products", productManageController.deleteProduct);

module.exports = router;
