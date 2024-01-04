const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: [{ type: String, required: true }],
  title: { type: String, required: true },
  discountprice: { type: String, required: true },
  price: { type: Number, required: true },
  off: { type: String, required: true },
  categoryid: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
});

const ProductModel = mongoose.model("Product", productSchema);
const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = { ProductModel, CategoryModel };
