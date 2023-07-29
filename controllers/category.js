const model = require("../models/categories");
const Categorie = model.Categorie;

exports.getAll = async (req, res) => {
  try {
    const products = await Categorie.find();
    res.status(201).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.get = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Categorie.findById(id);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.create = async (req, res) => {
  try {
    const Product = new Categorie(req.body);
    await Product.save();
    res.status(200).json(Product);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const res = await Categorie.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(res);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const res = await Categorie.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(res);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const res = await Categorie.findOneAndDelete({ _id: id });
    res.status(201).json(res);
  } catch (err) {
    res.status(400).json(err);
  }
};
