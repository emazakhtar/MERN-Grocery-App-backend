const express = require("express");
const router = express.Router();
const fruitController = require("../controllers/fruit");
router
  .get("/", fruitController.getAll)
  .get("/:id", fruitController.get)
  .post("/", fruitController.create)
  .put("/:id", fruitController.replace)
  .patch("/:id", fruitController.update)
  .delete("/:id", fruitController.delete);

exports.router = router;
