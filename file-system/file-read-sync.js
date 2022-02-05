const fs = require ("fs");
const data = fs.readFileSync ("content.txt");//, (err, data)=> {
//     if(err) {
//         console.log (err);
//     } else {
//         console.log(data.toString());
//     }
// })

console.log(data.toString());

console.log("program completed");   