const express = require ("express");
const controller = require("../controllers/userController");

const router = express.Router();

router.get("/register", controller.getRegisterView);

module.exports = router;