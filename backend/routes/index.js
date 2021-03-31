const userRouter = require("./userRoute");
const adminProductRouter = require("./admin.route/manageProducts");
const cartRoute = require("./userProduct.route/cartRoute");
const transactionRoute = require("./transaction.route/transactionRoute");

const checkAdminAuthority = require("../middlewares/checkAuthority");

function route(app) {
  app.use("/", userRouter);
  app.use("/product", adminProductRouter);
  app.use("/cart", cartRoute);
  app.use("/transaction", transactionRoute);


}

module.exports = route;
