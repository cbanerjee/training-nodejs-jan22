const { rejects } = require("assert");
const { resolve } = require("path/posix");

console.log("Task 1");

console.log("Task 2");

/*function add(a,b) {
    return a+b; //symchronous
}*/

const printDataFunction = function printData (err, data) {
    if(err) {
        console.log(err);
    } else {
        dataFromFile = data;
        console.log(data.toString());
    }
}

function readFile (num) {

    //setTimeout(()=>{console.log("Read file");}, 4000);
    const promise = new Promise ((resolve, reject)=>{
      //  setTimeout(resolve,4000);
      if (num ==0) {
          reject("Number is 0");
      }
      setTimeout (()=>{
          resolve("This is your data");
        },4000);
    })
    return promise;
}

//const result = 
const promiseResult = readFile (1);//= add ();

promiseResult.then(
    (data)=>{
        printDataFunction(null, data);
    },
    (err) => {
        console.log (err);
    }
)

console.log (promiseResult);

console.log("task 4");