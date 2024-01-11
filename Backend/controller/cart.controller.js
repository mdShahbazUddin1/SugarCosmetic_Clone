const { CartModel } = require("../model/cart.model");
const { ProductModel } = require("../model/product.model");
const { UserModel } = require("../model/user.model");

const addToCart = async (req, res) => {
  const userId = req.userId;
  const { productId } = req.params;

  try {
    const userExists = await UserModel.findById(userId);
    const product = await ProductModel.findById(productId);

    if (!userExists || !product) {
      return res.status(404).json({ error: "User or product not found" });
    }

    let cart = await CartModel.findOne({ user: userId });

    const defaultAddress = userExists.addresses.find(
      (address) => address.setdefault
    );

    const cartItem = {
      productId: product._id,
      quantity: 1,
      price: product.price,
    };

    if (!cart || !cart.cartItem) {
      const newCart = new CartModel({
        user: userId,
        cartItem: [cartItem],
        totalPrice: cartItem.price * cartItem.quantity,
        address: defaultAddress,
      });
      await newCart.save();
      res.status(200).json({
        message: "Product added to cart",
        cart: newCart.cartItem,
        totalPrice: newCart.totalPrice,
      });
    } else {
      const existingCartItem = cart.cartItem.find(
        (item) => item.productId.toString() === productId.toString()
      );

      if (existingCartItem) {
        return res.status(400).json({ message: "Product already in cart" });
      }

      cart.cartItem.push(cartItem);

      if (!isNaN(cartItem.price) && !isNaN(cartItem.quantity)) {
        cart.totalPrice += cartItem.price * cartItem.quantity;
      }

      cart.address = defaultAddress;
      await cart.save();

      res.status(200).json({
        message: "Product added to cart",
        cart: cart.cartItem,
        totalPrice: cart.totalPrice,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCartItem = async (req, res) => {
  const userId = req.userId;

  try {
    const userCart = await CartModel.findOne({ user: userId })
      .populate({
        path: "cartItem.productId",
        model: "Product",
        select: "title discountprice price image",
      })
      .populate({
        path: "address",
        model: "User",
        select: "addresses",
      });

    if (!userCart) {
      return res.status(404).json({ message: "User cart not found" });
    }

    const formattedCartItems = userCart.cartItem.map((item) => ({
      quantity: item.quantity,
      _id: item._id,
      productId: {
        _id: item.productId._id,
        title: item.productId.title,
        discountprice: item.productId.discountprice,
        price: item.productId.price,
        image: item.productId.image,
        // Add other fields you want to include from the Product model
      },
    }));

    const user = await UserModel.findById(userId);

    res.status(200).json({
      message: "Cart items retrieved successfully",
      cartItems: formattedCartItems,
      totalPrice: userCart.totalPrice,
      user: user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCart = async (req, res) => {
  const userId = req.userId;
  const { productId } = req.params;
  try {
    const { newQuantity } = req.body;

    // Find the user's cart
    const userCart = await CartModel.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the cart item that needs to be updated
    const updatedCartItem = userCart.cartItem.find(
      (item) => item.productId.toString() === productId
    );

    if (!updatedCartItem) {
      return res.status(404).json({ error: "Product not found in cart" });
    }

    // Update the quantity of the specific product
    updatedCartItem.quantity = newQuantity;

    // Recalculate the total price of the updated cart
    const total = userCart.cartItem.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    // Update the total price in the cart model
    userCart.totalPrice = total;

    // Save the updated cart
    await userCart.save();

    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteCartItem = async (req, res) => {
  const userId = req.userId;
  const { productId } = req.params;
  try {
    // Find the user's cart
    const userCart = await CartModel.findOne({ user: userId });

    if (!userCart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the index of the cart item that needs to be deleted
    const itemIndex = userCart.cartItem.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ error: "Product not found in cart" });
    }

    // Remove the cart item from the array
    userCart.cartItem.splice(itemIndex, 1);

    // Recalculate the total price of the updated cart
    const total = userCart.cartItem.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    // Update the total price in the cart model
    userCart.totalPrice = total;

    // Save the updated cart
    await userCart.save();

    res.status(200).json({ message: "Product deleted from cart successfully" });
  } catch (error) {
    console.error("Error deleting product from cart:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addToCart, getCartItem, updateCart, deleteCartItem };
