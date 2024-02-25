const express = require("express");
const router = express.Router();
const messageController = require("../controller/message.controller.js");
const { protectedRouter } = require("../middleware/protectRoute.js");

router.get("/:id", protectedRouter, messageController.getMessage);
router.post("/send/:id", protectedRouter, messageController.sendMessage);
module.exports = router;
