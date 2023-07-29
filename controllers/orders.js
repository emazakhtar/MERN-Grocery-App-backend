const model = require("../models/product");
const Order = model.Order;

exports.getAll = async (req, res) => {
  try {
    const products = await Order.find();
    res.status(201).json(products);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.get = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Order.findById(id);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.create = async (req, res) => {
  try {
    const Product = new Order(req.body);
    await Product.save();
    res.status(200).json(Product);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const res = await Order.findOneAndDelete({ _id: id });
    res.status(201).json(res);
  } catch (err) {
    res.status(400).json(err);
  }
};
