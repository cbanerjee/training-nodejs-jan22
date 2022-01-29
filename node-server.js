//Create a Web Server

const http = require("http");

// 1. Import HTTP Protocol module


http.createServer((req, res)=>{
    res.end("HEllo world from NodeJS server");
}).listen(3100);

console.log ("Server is listening on 3100 port");