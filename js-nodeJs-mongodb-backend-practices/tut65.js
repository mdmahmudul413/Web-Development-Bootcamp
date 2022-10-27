// synchronous or blocking
// -line by line execution

const fs = require("fs");
let text = fs.readFileSync('dele.txt', 'utf-8');
console.log(text);
console.log('This a message....');

// asynchronous or non-blocking
// line by line execution not guaranteed
// -callbacks will fire

const fs1 = require("fs");
fs1.readFile('dele.txt', 'utf-8', (err, data) => {
    console.log(err, data);
});
console.log('This a message....');