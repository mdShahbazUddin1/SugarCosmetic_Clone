const express = require("express");
const wishlistRoute = express.Router();
const wishlistController = require("../controller/wishlist.controller");
const { auth } = require("../middleware/auth");

wishlistRoute.post(
  "/addToWishlist/:productId",
  auth,
  wishlistController.addItemToWishlist
);
wishlistRoute.delete(
  "/removeFromWishlist/:productId",
  auth,
  wishlistController.removeFromWishlist
);
wishlistRoute.get("/getwishlist", auth, wishlistController.getWishlistProduct);

module.exports = {
  wishlistRoute,
};
