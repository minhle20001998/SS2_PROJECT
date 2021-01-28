
const checkRegister = (req, res, next) => {
    if (req.body.username && req.body.password && req.body.email) {
        next();
    } else {
        res.json({
            message: "failed to register"
        })
    }

}


module.exports.checkRegister = checkRegister;