const express = require ("express");
const controller = require("../controllers/userController");

const router = express.Router();

router.get("/register", controller.getRegisterView);
router.post("/register", controller.register);
router.get("/login",controller.getLoginView);
router.post("/login",controller.login);
router.get("/logout", controller.logout);

module.exports = router;