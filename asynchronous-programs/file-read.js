const fs = require("fs");

const printDataFunction = function printData(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
}

fs.readFile("data.txt",printDataFunction);

console.log("Task 2");

console.log("Data is read");