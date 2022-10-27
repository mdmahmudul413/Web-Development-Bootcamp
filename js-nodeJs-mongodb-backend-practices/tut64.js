// Node.Js Modules with Examples
const fs = require("fs");
let text = fs.readFileSync('dele.txt', 'utf-8');
console.log('The content of the file is');
console.log(text);

let text1 = text.replace('browser', 'chrome browser');

fs.writeFileSync('harry.txt', text1);
console.log('new text file is created.....')