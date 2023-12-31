const { ProductModel } = require("../model/product.model");
const { UserModel } = require("../model/user.model");
const { WishlistModel } = require("../model/wishlist.model");

const addItemToWishlist = async (req, res) => {
  const userId = req.userId;
  const productId = req.params.productId;

  try {
    // Check if the user exists
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the product exists
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Check if the product is already in the wishlist
    const isProductInWishlist = await WishlistModel.findOne({
      "wishlistitem.user": userId,
      "wishlistitem.product": productId,
    });

    if (isProductInWishlist) {
      return res
        .status(400)
        .json({ error: "Product is already in the wishlist" });
    }

    // Add the product to the wishlist
    const wishlistItem = {
      user: userId,
      product: productId,
      isInWishlist: true,
    };

    await WishlistModel.create({ wishlistitem: [wishlistItem] });

    res.status(201).json({
      message: "Product added to the wishlist successfully",
      wishlistItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const removeFromWishlist = async (req, res) => {
  const userId = req.userId;
  const productId = req.params.productId;
  try {
    // Check if the user exists
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the product exists
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Check if the product is in the wishlist
    const wishlistItem = await WishlistModel.findOne({
      "wishlistitem.user": userId,
      "wishlistitem.product": productId,
    });

    if (!wishlistItem) {
      return res
        .status(404)
        .json({ error: "Product not found in the wishlist" });
    }

    // Remove the product from the wishlist
    await WishlistModel.updateOne(
      { "wishlistitem.user": userId },
      { $pull: { wishlistitem: { product: productId } } }
    );

    res.status(200).json({
      message: "Product removed from the wishlist successfully",
      productId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getWishlistProduct = async (req, res) => {
  const userId = req.userId;
  try {
    // Check if the user exists
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Retrieve the wishlist items for the user
    const wishlistItems = await WishlistModel.findOne({
      "wishlistitem.user": userId,
    });

    if (!wishlistItems) {
      return res
        .status(200)
        .json({ message: "Wishlist is empty", wishlistItems: [] });
    }

    res.status(200).json({
      message: "Wishlist items retrieved successfully",
      wishlistItems: wishlistItems.wishlistitem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addItemToWishlist,
  removeFromWishlist,
  getWishlistProduct,
};
