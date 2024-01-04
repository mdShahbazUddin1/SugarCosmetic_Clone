const express = require("express");
const cartRoute = express.Router();
const cartController = require("../controller/cart.controller");
const { auth } = require("../middleware/auth");

cartRoute.post("/addToCart/:productId", auth, cartController.addToCart);
cartRoute.get("/getCart/", auth, cartController.getCartItem);
cartRoute.patch("/updateCart/:productId", auth, cartController.updateCart);
cartRoute.delete("/deleteCart/:productId", auth, cartController.deleteCartItem);

module.exports = { cartRoute };
