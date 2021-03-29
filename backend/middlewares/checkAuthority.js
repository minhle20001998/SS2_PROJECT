const UsersDB = require("../models/usersSchema");
const JWT = require("jsonwebtoken");


const checkAuthority = (req, res, next) => {
    if (!req.cookies.token) {
        res.status(406).json({
            message: "cookies not included !"
        })
        return;
    } else {
        JWT.verify(req.cookies.token, process.env.JWT_SCECRET, async function (err, decoded) {
            if (err) {
                res.status(406).json({
                    message: "wrong token"
                })
                return;
            }
            const product = await UsersDB.find({ _id: decoded.sub })
            if (product.authority != "admin") {
                res.status(403).json({
                    message: "account not authorized"
                })
            } else {
                next();
            }
        })
    }
    // next();
}



module.exports = checkAuthority