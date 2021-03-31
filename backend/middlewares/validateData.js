const mongoose = require("mongoose");
const productSchema = require("../models/productSchema");
const cartSchema = require("../models/cartSchema");

const checkRegister = (req, res, next) => {
    if (req.body.username && req.body.password && req.body.email) {
        next();
    } else {
        res.json({
            message: "failed to register"
        })
    }

}

const checkIfCartExist = async (req, res, next) => {
    const { userID } = req.body;
    const cart = await cartSchema.findOne({ userID: userID });
    if (cart === null)
        next();
    else
        res.json({
            err: "This user already have a cart"
        })
}


module.exports.checkRegister = checkRegister;
module.exports.checkIfCartExist = checkIfCartExist;
