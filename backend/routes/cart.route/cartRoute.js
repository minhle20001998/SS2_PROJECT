const express = require("express");
const router = express.Router();
const cartController = require('../../controllers/cart-controller/cartManagement');
const checkCustomerAuthority = require('../../middlewares/checkAuthority');
const checkIfCartExist = require('../../middlewares/validateData');

router.get('/', cartController.getAllCart);
router.get('/:id', cartController.getCart);
router.post('/', checkIfCartExist.checkIfCartExist, cartController.createCart);
router.put('/', cartController.updateCart);
router.delete('/:id', cartController.deleteProductCart);




module.exports = router;


