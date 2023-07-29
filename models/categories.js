const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  img: { type: String, required: true },
});
exports.Categorie = mongoose.model("Categorie", categorySchema);
