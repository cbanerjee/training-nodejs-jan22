//api/user/auth

const express = require ("express")
const userAuthController = require("../controllers/user-auth-controllers");

const router = express.Router();

router.post("/register", userAuthController.register);
router.post("/login", userAuthController.login);

module.exports = router;