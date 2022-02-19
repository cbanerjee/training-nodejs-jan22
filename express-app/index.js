const express = require ("express");

const userAuthRoutes = require("./user/routes/user-auth-routes");
const userRoutes = require("./user/routes/user-routes");
const tweetRoutes = require("./tweet/routings/tweet");

const bodyParser = require("body-parser");
const mongodb = require("./config/mongodb");
const errorHandler = require ("./middlewares/error-handler");

const server = express();

mongodb.connect();

server.listen (3200, ()=>{
    console.log("Server is listening");
})

server.use(bodyParser.json());

server.use("/api/user/auth", userAuthRoutes);
server.use("/api/user/", userRoutes);
server.use("/api/tweet", tweetRoutes);

server.use(errorHandler);

server.use((req, res)=>{
    res.status(404).send("Please check your path");
})

server.get("/", (req, res) =>{
    res.end("Hello from Express. You are now connected");
})