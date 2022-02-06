const express = require ("express");

const server = express();

server.listen (3200, ()=>{
    console.log("Server is listening");
})

const userAuthRoutes = require("./user/routes/user-auth-routes");
server.use("/api/user/auth", userAuthRoutes);

server.get("/", (req, res) =>{
    res.end("Hello from Express. You are now connected");
})