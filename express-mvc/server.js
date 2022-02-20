const express = require ("express");
const userRoutes = require("./src/user/routes/user");

const server = express();

server.use("/user/", userRoutes);

server.listen(3000);
server.get("/", (req,res)=>{
    res.send("Hi, you're connected to Express MVC");
})

console.log("Server listening at 3k");