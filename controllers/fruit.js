const model = require("../models/product");
const Fruit = model.Fruit;

exports.getAll = async (req, res) => {
  try {
    const products = await Fruit.find();
    res.status(201).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.get = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Fruit.findById(id);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.create = async (req, res) => {
  try {
    const Product = new Fruit(req.body);
    await Product.save();
    res.status(200).json(Product);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const res = await Fruit.findOneAndReplace({ _id: id }, req.body, {
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
    const res = await Fruit.findOneAndUpdate({ _id: id }, req.body, {
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
    const res = await Fruit.findOneAndDelete({ _id: id });
    res.status(201).json(res);
  } catch (err) {
    res.status(400).json(err);
  }
};
