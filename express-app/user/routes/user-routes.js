//api/user/

const express = require ("express");
const userController = require("../controllers/user");

const router = express.Router();

router.put("/", userController.update);

module.exports = router;