const express = require("express");

const cors = require("cors");
const { connection } = require("./config/DB");
const { userRoute } = require("./routes/user.routes");
const { productRoute } = require("./routes/product.routes");
const { wishlistRoute } = require("./routes/wishlist.routes");
const { cartRoute } = require("./routes/cart.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/wishlist", wishlistRoute);
app.use("/cart", cartRoute);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB is connected");
  } catch (error) {}
  console.log("Server is running");
});
