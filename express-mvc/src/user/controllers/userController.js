const path = require("path");
const userModel = require ("../models/user");
const repo = require("../repositories/user");

exports.getRegisterView = (req, res) =>{
    console.log(path.join(__dirname,"../views/registration.html"));
    res.sendFile(path.join(__dirname,"../views/registration.html"));
}

exports.getLoginView = (req, res) =>{
    res.sendFile(path.join(__dirname,"../views/login.html"));
}


exports.register = (req, res)=>{
    
    const newUser = new userModel (req.body.name, req.body.email, req.body.password, req.body.gender);

    repo.add(newUser, ()=>{
        res.sendFile(path.join(__dirname,"../../shared/views/home.html"));
    })
}

exports.login = (req, res)=>{
    repo.getByEmail(req.body.email, (record)=>{
        // console.log(record.password);

        if(!record){
            console.log("No Record found");
            res.send("Invalid Email");
        }else if(record.password==req.body.password){
            req.session.authenticated=true;
            req.session.user = record;
            res.sendFile(path.join(__dirname,"../../shared/views/home.html"));  
        }else{
            console.log("Wrong Password");
            res.send("Wrong Password");
        }
    })
 }