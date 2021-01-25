const express = require('express');
const router = express.Router();
const middlewares = require('../middlewares/validateData');
const userController = require('../controllers/userController');

router.post('/register', middlewares.checkRegister, userController.register);
router.post('/login', userController.login);

module.exports = router;