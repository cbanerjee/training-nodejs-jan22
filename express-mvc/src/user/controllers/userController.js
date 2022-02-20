const path = require("path");
const userModel = require ("../models/user");
const repo = require("../repositories/user");

exports.getRegisterView = (req, res) =>{
    console.log(path.join(__dirname,"../views/registration.html"));
    res.sendFile(path.join(__dirname,"../views/registration.html"));
}


exports.register = (req, res)=>{
    
    const newUser = new userModel (req.body.name, req.body.email, req.body.password, req.body.gender);
    
    // console.log("The control has been received "+req.body.name.toString() + " " + req.body.email.toString() +" "+ req.body.password.toString()+" " + req.body.gender.toString());

    //res.send("This is register");
    repo.add(newUser, ()=>{
        // res.send("Data is Added");
        res.sendFile(path.join(__dirname,"../../shared/views/home.html"));
    })
}