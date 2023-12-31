const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
  wishlistitem: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      isInWishlist: {
        type: Boolean,
        default: false,
      },
    },
  ],
  added_at: {
    type: Date,
    default: Date.now,
  },
});

const WishlistModel = mongoose.model("Wishlist", wishlistSchema);

module.exports = { WishlistModel };
