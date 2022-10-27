// Creating Custom Modules in Node Using NodeJs
console.log('Thie is index.js');
const mod = require('./mod');

// console.log(mod([3, 3]));
console.log(mod.ave([3, 3]));
console.log(mod.name);
console.log(mod);

console.log(mod.nickName);