//api/user/

const express = require ("express");
const userController = require("../controllers/user");

const router = express.Router();

router.put("/", userController.update);
router.get("/:id/",userController.getByID);
router.delete("/:id", userController.deleteUser);

module.exports = router;