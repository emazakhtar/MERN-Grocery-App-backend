const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlist");
router
  .get("/:userId", wishlistController.getAll)
  .get("/:userId/:itemId", wishlistController.get)
  .post("/:userId", wishlistController.create)
  .delete("/:userId/:itemId", wishlistController.delete);

exports.router = router;
