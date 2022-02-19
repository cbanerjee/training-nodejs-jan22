const userModel = require ("../models/user");
const repo = require("../repositories/user");
const jwt = require("jsonwebtoken");

exports.register = (req, res)=>{
    
    const newUser = new userModel (req.body.name, req.body.email, req.body.password, req.body.gender);
    
    //res.send("This is register");
    repo.add(newUser, ()=>{
        res.send("Data is Added");
    })
}

exports.login = (req,res)=>{
    // console.log("This is a login req")

    // throw new Error("Uncaught exception");
    // res.end ("This is login");
    const email = req.body.email;
    const password = req.body.password;

    repo.getByEmail(email, (record)=>{
        if(!record) {
            res.status(400).send("Invalid Email");
        }
        if(record.password==password){
            //Create token using jsonwebtoken
            const token = jwt.sign({
                _id: record._id,
                email: record.email
            },
            "This is my secret key",
            {
                expiresIn: '2h'
            }
            );

            const response ={
                email: record.email,
                id:record._id,
                token: token
            }

            res.status(200).send(response);//send("Login done");
        } else {
            res.status(400).send("Wrong password");
        }
    })
}