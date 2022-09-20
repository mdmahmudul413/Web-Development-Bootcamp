// Primitive Data type

// string 
let name = "Harry";
console.log("Value of Variable " + name);
console.log("Data Type is " + (typeof name));

// Number 
let marks = 34;
console.log("Value of Variable " + marks);
console.log("Data Type is " + (typeof marks));

// Boolean 
let bool = true;
console.log("Value of Variable " + bool);
console.log("Data Type is " + (typeof bool));

// Null 
let nullVar = null;
console.log("Value of Variable " + nullVar);
console.log("Data Type is " + (typeof nullVar));
// it returns a bogus type

// Undefined 
let undefinedVar = undefined;
console.log("Value of Variable " + undefinedVar);
console.log("Data Type is " + (typeof undefinedVar));

// Reference Data Type 

// Array 
let myArr = [1, 2, 3, 4, 5, null, undefined, true]
console.log("Value of Variable " + myArr);
console.log("Data Type is " + (typeof myArr));

// Object Literals
let objMarks = {
    Harry: 10,
    Potter: 20,
    Kim: 30,
    Jong: 40

}
console.log(objMarks);
console.log("Value of Variable " + objMarks);
console.log("Data Type is " + (typeof objMarks));

// functions 
function findName() {

}
console.log("Value of Variable " + findName);
console.log("Data Type is " + (typeof findName));

// Date 
let date = new Date();
console.log(date);
console.log("Data Type is " + (typeof date));