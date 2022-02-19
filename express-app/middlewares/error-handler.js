const fs = require ("fs");

const handler = (error, req, res, next) =>{
    // fs.appendFileSync("./logs/server-error.txt","\n");
    fs.appendFileSync("./logs/server-error.txt","\nAt time: "+new Date()+"\t"+error.stack.toString());

    res.send("Server error has occurred. Please contact support");
}

module.exports = handler