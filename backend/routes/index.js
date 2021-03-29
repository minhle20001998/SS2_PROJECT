const userRouter = require("./userRoute");
const adminProductRouter = require("./admin.route/manageProducts");
const cartRoute = require("./userProduct.route/cartRoute")
const checkAuthority = require("../middlewares/checkAuthority");

function route(app) {
  app.use("/", userRouter);
  // app.use("/product");
  app.use("/admin", adminProductRouter);
  app.use("/cart", cartRoute);

}

module.exports = route;
