const model = require("../models/user");
const User = model.User;

exports.getAll = async (req, res) => {
  const id = req.params.userId;
  try {
    const user = await User.findOne({ _id: id });
    res.status(201).json(user.userWishlist);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.get = async (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;
  try {
    const user = await User.findById(userId);
    const wishlistItem = user.userWishlist.find(
      (item) => item._id.toString() === itemId
    );
    res.status(201).json(wishlistItem);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.create = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    user.userWishlist.push(req.body);
    console.log(user);
    await user.save();
    const wishlistItem = user.userWishlist.find((item) => {
      return item.name === req.body.name;
    });
    res.status(200).json(wishlistItem);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.delete = async (req, res) => {
  console.log("delete endpoint reached");
  try {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    const user = await User.findOne({ _id: userId });
    const itemIndex = user.userWishlist.findIndex(
      (item) => item._id.toString() === itemId
    );
    const deletedArray = user.userWishlist.splice(itemIndex, 1);
    await user.save();
    res.json(deletedArray[0]);
  } catch (err) {
    res.status(400).json(err);
  }
};
