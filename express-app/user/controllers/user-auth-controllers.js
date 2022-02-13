const userModel = require ("../models/user");
const repo = require("../repositories/user")

exports.register = (req, res)=>{
    
    const newUser = new userModel (req.body.name, req.body.email, req.body.password, req.body.gender);
    
    //res.send("This is register");
    repo.add(newUser, ()=>{
        res.send("Data is Added");
    })
}

exports.login = (req,res)=>{
    console.log("This is a login req")
    res.end ("This is login");
}