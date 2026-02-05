const authRouter = require("./user/auth.routes");
const productsRouter = require("./products/products.routes");
const routes = (app) => {
  app.use("/api", authRouter);
  app.use("/api", productsRouter);
};
module.exports = routes;
