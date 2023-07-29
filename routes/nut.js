const express = require("express");
const router = express.Router();
const nutController = require("../controllers/nut");
router
  .get("/", nutController.getAll)
  .get("/:id", nutController.get)
  .post("/", nutController.create)
  .put("/:id", nutController.replace)
  .patch("/:id", nutController.update)
  .delete("/:id", nutController.delete);

exports.router = router;
