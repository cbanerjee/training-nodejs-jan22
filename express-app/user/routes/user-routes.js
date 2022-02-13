//api/user/

const express = require ("express");
const userController = require("../controllers/user");

const router = express.Router();

router.put("/", userController.update);
router.get("/:id/",userController.getByID);

module.exports = router;