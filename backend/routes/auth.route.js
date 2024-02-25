const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller.js");

router.post("/login", authController.login);
router.post("/signup", authController.signUp);
router.post("/logout", authController.logout);

module.exports = router;
