const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
});
exports.Fruit = mongoose.model("Fruit", productSchema);
exports.Vegetable = mongoose.model("Vegetable", productSchema);
exports.Nut = mongoose.model("Nut", productSchema);
exports.Cookie = mongoose.model("Cookie", productSchema);
