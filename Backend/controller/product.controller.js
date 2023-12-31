const { CategoryModel, ProductModel } = require("../model/product.model");

// create category and add product to particular category
const addProduct = async (req, res) => {
  const { categoryname, image, title, discountprice, price, off } = req.body;

  try {
    // Using findOneAndUpdate with upsert option to find or create a category
    const category = await CategoryModel.findOneAndUpdate(
      { name: categoryname },
      { name: categoryname },
      { upsert: true, new: true }
    );

    const newProduct = new ProductModel({
      image,
      title,
      discountprice,
      price,
      off,
      categoryid: category._id,
    });

    await newProduct.save();
    res.status(200).send({ msg: "Product Added", newProduct });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllProductByCategories = async (req, res) => {
  try {
    // Fetch all products
    const allProducts = await ProductModel.find().populate({
      path: "categoryid",
      model: "Category",
      options: { strictPopulate: false },
    });

    // Organize products by category
    const productsByCategory = {};

    allProducts.forEach((product) => {
      const categoryName = product.categoryid.name;

      if (!productsByCategory[categoryName]) {
        productsByCategory[categoryName] = [];
      }

      productsByCategory[categoryName].push(product);
    });

    res.status(200).json(productsByCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addProductToCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const productData = req.body;

  try {
    const category = await CategoryModel.findById(categoryId);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const newProduct = new ProductModel({
      ...productData,
      categoryid: categoryId,
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product added to the category successfully",
      newProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addProduct,
  getAllProductByCategories,
  addProductToCategory,
};
