const UsersDB = require('../models/usersSchema');
const mongoose = require('mongoose');
const JWT = require('jsonwebtoken');

const encodedToken = (userID, userName) => {
    return JWT.sign({
        iss: 'Minh Le',
        sub: userID,
        uname: userName,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 3)
    }, process.env.JWT_SCECRET)

}
// const schema = require('../helpers/helpers');
class userController {
    constructor() {
    }


    register(req, res) {
        const user = new UsersDB({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            password: req.body.password,
            contacts: { email: req.body.email }
        });
        user.save().then(result => {
            res.json({
                message: "oke"
            })
        }).catch(err => {
            res.json({
                message: `${Object.keys(err.keyPattern)[0]} is existed`
            })
        });

    }

    async login(req, res) {
        const userDB = await UsersDB.findOne({ 'username': `${req.body.username}` });
        console.log(userDB);
        try {
            if (userDB.password === req.body.password) {
                const token = encodedToken(userDB._id, userDB.username);
                res.json({
                    message: "login successfully",
                    user_token: token
                })
            } else {
                res.json({
                    message: "password incorrect"
                })
            }
        } catch (err) {
            res.json({
                message: "account not existed !!"
            })
        }
    }



}

module.exports = new userController;