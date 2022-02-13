const express = require ("express");

const userAuthRoutes = require("./user/routes/user-auth-routes");
const userRoutes = require("./user/routes/user-routes");

const bodyParser = require("body-parser");
const mongodb = require("./config/mongodb");

const server = express();

mongodb.connect();

server.listen (3200, ()=>{
    console.log("Server is listening");
})

server.use(bodyParser.json());

server.use("/api/user/auth", userAuthRoutes);
server.use("api/user/", userRoutes);

server.get("/", (req, res) =>{
    res.end("Hello from Express. You are now connected");
})