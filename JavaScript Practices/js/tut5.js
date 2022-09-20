// Type conversion
console.log("Hello Guys.....");

// Number to String 
let myVar = 34;
console.log(myVar, (typeof myVar));

let myVar1 = String(34);
console.log(myVar1, (typeof myVar1));

// Boolean to String 
let boolVar = true;
console.log(boolVar, (typeof boolVar));

let boolVar1 = String(true);
console.log(boolVar1, (typeof boolVar1));

// Date to String 
let datelVar = new Date();
console.log(datelVar, (typeof datelVar));

let datelVar1 = String(new Date());
console.log(datelVar1, (typeof datelVar1));

// Array to String 
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr, (typeof arr));

let arr1 = String([1, 2, 3, 4, 5, 6, 7]);
console.log(arr1, (typeof arr1));

// We can apply String functions to these strings 
// Calculating length 
let arr2 = String([1, 2, 3, 4, 5, 6, 7]);
console.log(arr2.length, (typeof arr2));

// toString() method
let i = 15;
console.log(i, (typeof i));

let q = 15;
console.log(q.toString(), (typeof q));

// Convert to number 
let str = "121323";
console.log(str, (typeof str));

let str1 = Number("121323");
console.log(str1, (typeof str1));

let str2 = Number("12sdf1323");
console.log(str2, (typeof str2));

// bool variables returns 1 or 0
let bool = Number(true);
console.log(bool, (typeof bool));
bool = Number(false);
console.log(bool, (typeof bool));

// parseInt/parseFloat
let number = parseInt(34.347);
console.log(number, (typeof number));
number = parseFloat(34.54646);
console.log(number, (typeof number));

// toFixed()
let num = 3.45794;
console.log(num.toFixed(2));
console.log(num.toFixed(50));

// Type coersion
let num0 = "34";
let num1 = 12;
console.log(num0 + num1);