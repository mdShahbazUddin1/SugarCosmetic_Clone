const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.model");
const { BlackListModel } = require("../model/blacklisttoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers?.authorization;
    if (!token) return res.status(404).json({ msg: "token is not provided" });
    const decodeToken = jwt.verify(token, process.env.accessToken);
    const user = await UserModel.findOne({ _id: decodeToken.userId });
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const blacklistToken = await BlackListModel.findOne({ token: token });

    if (blacklistToken) {
      return res.status(401).send({ msg: "login first" });
    }
    req.user = user;
    req.userId = decodeToken.userId;
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { auth };
