const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");
router
  .get("/", ordersController.getAll)
  .get("/:id", ordersController.get)
  .post("/", ordersController.create)
  .delete("/:id", ordersController.delete);

exports.router = router;
