const express = require("express");
const productRoute = express.Router();
const productController = require("../controller/product.controller");
const { auth } = require("../middleware/auth");

productRoute.post("/addproduct", auth, productController.addProduct);
productRoute.get(
  "/getproduct",

  productController.getAllProductByCategories
);
productRoute.post(
  "/addProductToCategory/:categoryId",
  auth,
  productController.addProductToCategory
);

module.exports = {
  productRoute,
};
