const express = require ("express");
const controller = require("../controllers/tweetController");
const sessionAuth = require("../../shared/middlwares/session-auth");

const router = express.Router();

router.get("/",sessionAuth,controller.viewTweet);
// router.get("/viewtweet", sessionAuth, controller.viewTweet);


module.exports = router;