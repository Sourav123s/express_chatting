const express = require("express");
const router = express.Router();
const { protectedRouter } = require("../middleware/protectRoute.js");
const userController = require("../controller/user.controller.js");

router.get("/", protectedRouter, userController.getUser);

module.exports = router;
