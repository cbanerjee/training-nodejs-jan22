const express = require ("express");

const server = express();

server.listen (3200, ()=>{
    console.log("Server is listening");
})

server.get("/", (req, res) =>{
    res.end("Hello from Express. You are connected");
})