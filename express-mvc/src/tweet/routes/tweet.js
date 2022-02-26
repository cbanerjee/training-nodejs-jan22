const express = require ("express");
const controller = require("../controllers/tweetController");

const router = express.Router();

router.post("/viewtweet", controller.viewTweet);


module.exports = router;