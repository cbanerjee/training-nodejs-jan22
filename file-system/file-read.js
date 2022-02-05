const fs = require ("fs");
fs.readFile ("content.txt", (err, data)=> {
    if(err) {
        console.log (err);
    } else {
        console.log(data.toString());
    }
})

console.log("program completed");   