const express = require("express");
const router = express.Router();
const vegetableController = require("../controllers/vegetable");
router
  .get("/", vegetableController.getAll)
  .get("/:id", vegetableController.get)
  .post("/", vegetableController.create)
  .put("/:id", vegetableController.replace)
  .patch("/:id", vegetableController.update)
  .delete("/:id", vegetableController.delete);

exports.router = router;
