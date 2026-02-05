const express = require("express");
const productsRouter = express.Router();
const verifyToken = require("../../middlewares/verifyToken");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  newProduct,
} = require("../../controllers/products/new-product.controller");

productsRouter.post(
  "/new-product",
  verifyToken,
  upload.array("images"),
  newProduct,
);

module.exports = productsRouter;
