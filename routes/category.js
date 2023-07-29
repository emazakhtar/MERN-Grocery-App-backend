const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category");
router
  .get("/", categoryController.getAll)
  .get("/:id", categoryController.get)
  .post("/", categoryController.create)
  .put("/:id", categoryController.replace)
  .patch("/:id", categoryController.update)
  .delete("/:id", categoryController.delete);

exports.router = router;
