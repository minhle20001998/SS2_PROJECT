const cartSchema = require("../models/cartSchema");
const mongoose = require("mongoose");

class cartManagement {
    async getCart() {

    }

    async getAllCart() {

    }

    async createCart(req, res) {
        try {
            const { userID, productID, quantity } = req.body;
            const cart = new cartSchema({
                _id: new mongoose.Types.ObjectId().toHexString(),
                userID: userID,
                productID: productID,
                quantity: quantity,
            });
            let saveCart = await cart.save();
            res.json(saveCart);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }

    async updateCart() {

    }

    async deleteCart() {

    }
}

module.exports = new cartManagement();
