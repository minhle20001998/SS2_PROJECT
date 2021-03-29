const express = require("express");
const router = express.Router();

const cartController = require('../../controllers/cartManagement');

router.post('/create', cartController.createCart);

module.exports = router;


