const express = require("express");
const router = express.Router();
const cookieController = require("../controllers/cookie");
router
  .get("/", cookieController.getAll)
  .get("/:id", cookieController.get)
  .post("/", cookieController.create)
  .put("/:id", cookieController.replace)
  .patch("/:id", cookieController.update)
  .delete("/:id", cookieController.delete);

exports.router = router;
