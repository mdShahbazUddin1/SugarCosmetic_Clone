const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://jackayron5:9931797391@cluster0.rv20l5p.mongodb.net/sugar?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
