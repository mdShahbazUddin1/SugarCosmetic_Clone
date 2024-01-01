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

    // Find the wishlist for the user
    let wishlist = await WishlistModel.findOne({
      "wishlistitem.user": userId,
    });

    if (!wishlist) {
      // If the wishlist doesn't exist, create a new one
      wishlist = await WishlistModel.create({
        wishlistitem: [],
      });
    }

    // Check if the product is already in the wishlist
    const isProductInWishlist = wishlist.wishlistitem.find(
      (item) => item.product.toString() === productId
    );

    if (isProductInWishlist) {
      return res
        .status(400)
        .json({ error: "Product is already in the wishlist" });
    }

    // Add the product to the wishlist
    wishlist.wishlistitem.push({
      user: userId,
      product: productId,
      isInWishlist: true,
    });

    await wishlist.save();

    res.status(201).json({
      message: "Product added to the wishlist successfully",
      wishlistItem: {
        user: userId,
        product: productId,
        isInWishlist: true,
      },
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

    // Extract product IDs from wishlist items
    const productIds = wishlistItems.wishlistitem.map((item) => item.product);

    // Fetch product details for the retrieved product IDs
    const products = await ProductModel.find({ _id: { $in: productIds } });

    // Combine product details with wishlist items
    const wishlistWithProducts = wishlistItems.wishlistitem.map((item) => {
      const productDetails = products.find((product) =>
        product._id.equals(item.product)
      );
      return { ...item.toObject(), productDetails };
    });

    res.status(200).json({
      message: "Wishlist items retrieved successfully",
      wishlistItems: wishlistWithProducts,
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
