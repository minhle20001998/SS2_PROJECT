const userRouter = require("./userRoute");
const adminProductRouter = require("./admin.route/manageProducts");
const checkAuthority = require("../middlewares/checkAuthority");

function route(app) {
  app.use("/", userRouter);
  app.use("/admin", adminProductRouter);
}

module.exports = route;
