const express = require ("express");
const userRoutes = require("./src/user/routes/user");
const bodyParser = require("body-parser");
const mongodb = require("./config/mongodb");
const path = require ("path");

const server = express();
mongodb.connect();

server.use(bodyParser.urlencoded({extended: false}));

server.use("/user/", userRoutes);

server.listen(3000);
server.get("/", (req,res)=>{
    // res.send("Hi, you're connected to Express MVC");
    res.sendFile(path.join(__dirname,"./src/shared/views/home.html"));
})

console.log("Server listening at 3k");