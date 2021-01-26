const userRouter = require("./userRoute");
const adminProductRouter = require("./admin.route/manageProducts");
function route(app) {
  app.use("/", userRouter);
  app.use("/admin", adminProductRouter);
}

module.exports = route;
