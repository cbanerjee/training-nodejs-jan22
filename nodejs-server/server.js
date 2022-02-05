const http = require("http");

http.createServer((req,res) =>{
    res.end("Hello from node.JS, You're connected!");
}).listen(3200);

console.log("Server is listening on 3200...");