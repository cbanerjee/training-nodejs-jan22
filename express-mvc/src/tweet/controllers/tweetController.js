const path = require("path");
const repo = require("../repositories/tweet");

exports.viewTweet = (req, res) =>{
    // console.log(JSON.stringify(req.session.user));

    // repo.getByEmail(req.session.user.email, (record)=>{
    repo.getByUserID(req.session.user._id, (record)=>{
        // res.send(record);
        console.log(record);
        record.forEach(element=>{
            element.userName = req.session.user.name;

            element.timestamp = new Date(element.timestamp).toDateString() + ", "+ new Date(element.timestamp).toLocaleString('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true });
        })
        res.render("tweet", {content : record});
    },
    err=>(console.log(err)))
}

exports.getTweet = (req, res) =>{
    res.sendFile(path.join(__dirname,"../views/tweet.html"));
}