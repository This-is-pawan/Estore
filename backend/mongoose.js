const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id:String,
  product: String,
  size: String,
  launch: Number,
  HD: String,
  operating: String,
  price:String,
  img:String,
});

module.exports = mongoose.model("storedt", userSchema);
