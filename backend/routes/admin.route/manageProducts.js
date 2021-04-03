const express = require("express");
const router = express.Router();
const productManageController = require("../../controllers/admin-controller/productManage");
const checkAdminAuthority = require("../../middlewares/checkAuthority");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    //reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error("wrong file type, jpeg and png only"), false);
    }
    // if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ) {
    // }
    // cb(new Error("wrong file type, jpeg and png only"), false);
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 3
    },
    fileFilter: fileFilter
});


//middleware check if authority is admin
router.get("/", productManageController.getProducts);
router.get("/:id", productManageController.getProduct);
router.post("/", upload.array('productImage'), productManageController.createProduct);
router.put("/", productManageController.updateProduct);
router.delete("/:id", checkAdminAuthority, productManageController.deleteProduct);

module.exports = router;
