const path = require("path");
const repo = require("../repositories/tweet");

exports.viewTweet = (req, res) =>{
    // console.log(JSON.stringify(req.body));

    repo.getByEmail(req.body.email, (record)=>{
        // console.log(record);
        res.send(record);
    },
    err=>(console.log(err)))
}