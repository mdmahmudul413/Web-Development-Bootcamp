// Arrays and Objects
let marks = [45, 33, 54, 78, 24, 56];
const fruits = ["Orange", "Apple", "Pineapple"];

// mixed array 
const mixed = ["str", 47, [3, 4, ["man", "woman"]]];

console.log(marks);
console.log(fruits);
console.log(mixed);

// Array by object
let arr = new Array(1, 23, 44, 54, ["Orange", "Apple"]);
console.log(arr);

// Array length. note thet it is written as length, not length() because it is a array property not a method
console.log(arr.length);

// Array.isArray() method to chack that it is array or not. We have to pass a value to a method
console.log(Array.isArray(arr));
console.log(Array.isArray("kkk"));

// To change a value 
console.log(arr);
arr[0] = "Harry";
console.log(arr);

// to know a specific value index 
console.log(arr.indexOf(23));

// Muteting/ Modifying Array 
// Technique 1: Push/Pop to insert or delete a value at the end of the array
arr.push(1000000);
console.log(arr);

arr.pop();
console.log(arr);

// Technique 2: unshift/shift to insert or delete a value at the beginning of the array
// insert
arr.unshift(666);
console.log(arr);
// delete 
arr.shift();
console.log(arr);

// splice(value, value) method to delete vlaues
arr.splice(1, 3);
console.log(arr);

// to reverse the value of an array 
console.log(marks);
marks.reverse();
console.log(marks);

// Array concatenation
let mark = [1, 2, 3, 4, 5, 6, 7]
console.log(marks.concat(mark));
console.log(mark.concat(marks));

// Object 
let myObj = {
    "First Name": "Harry",
    Channel: "CWH",
    isActive: true,
    marks: [1, 2, 3, 4]
}

console.log(myObj);
console.log(myObj.Channel);
console.log(myObj["First Name"]);
console.log(myObj["marks"]);
console.log(myObj.marks);