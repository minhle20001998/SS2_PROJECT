const UsersDB = require("../models/usersSchema");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const encodedToken = (userID, userName) => {
  return JWT.sign(
    {
      iss: "Minh Le",
      sub: userID,
      uname: userName,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    process.env.JWT_SCECRET
  );
};
// const schema = require('../helpers/helpers');
class userController {
  constructor() {
    this.saltRounds = 10;
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  register(req, res) {
    bcrypt.hash(req.body.password, this.saltRounds, function (err, hash) {
      // Store hash in your password DB.
      const user = new UsersDB({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        password: hash,
        contacts: { email: req.body.email },
        authority: "client",
      });
      user
        .save()
        .then((result) => {
          res.json({
            message: "oke",
          });
        })
        .catch((err) => {
          res.json({
            message: `${Object.keys(err.keyPattern)[0]} is existed`,
          });
        });
    });
  }

  async login(req, res) {
    const userDB = await UsersDB.findOne({ username: `${req.body.username}` });
    try {
      const isSame = await bcrypt.compare(req.body.password, userDB.password);
      if (isSame) {
        const token = encodedToken(userDB._id, userDB.username);
        res.json({
          message: "login successfully",
          user_token: token,
        });
      } else {
        res.json({
          message: "password incorrect",
        });
      }
    } catch (err) {
      res.json({
        message: "account not existed !!",
      });
    }
  }
}

module.exports = new userController();
