const express = require ("express");
const session = require("express-session");
const userRoutes = require("./src/user/routes/user");
const tweetRoutes = require("./src/tweet/routes/tweet");
const bodyParser = require("body-parser");
const mongodb = require("./config/mongodb");
const path = require ("path");

const server = express();

server.use(session({
    secret: "This is my private key",
    cookie: {maxAge: 300000},
    saveUninitialized: false
}));

server.set("view engine", "ejs");
server.set("views",
[path.join(__dirname, "./src/tweet/views"), 
 path.join(__dirname, "./src/user/views")])


mongodb.connect();


server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use("/user/", userRoutes);
server.use("/tweet/",tweetRoutes);

server.listen(3000);
server.get("/", (req,res)=>{
    // res.send("Hi, you're connected to Express MVC");
    res.sendFile(path.join(__dirname,"./src/shared/views/home.html"));
})

console.log("Server listening at 3k");