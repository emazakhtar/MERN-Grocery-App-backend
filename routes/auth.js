const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const multer = require("multer");
const upload = multer();
router
  .post("/login", upload.any(), authController.login)
  .post("/signup", upload.any(), authController.signup);

exports.router = router;
