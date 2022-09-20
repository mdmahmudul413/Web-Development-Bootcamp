// If Else Conditionals & Switches in JavaScript
// == operator check only the value not data type 
const age = 65;

if (age == 19) {
    console.log("Age is 19");
} else if (age == 49) {
    console.log("Age is 45");
} else {
    console.log("Age is 65");
}

// note that: when we write 1000 lines of if else statements then, we should add else if to each line....... Otherwise compiler will check evry if-else statement and consume more time 


// when we wants to check value and also data type then we have to add ===(equal value and equal type) to the condition
const height = "100";
if (height === 100) {
    console.log("height is 100");
} else {
    console.log("height is 65");
}

// when we wants to check value and data type both not equal then, we have to add !==(not equal value or not equal type) to the condition
let weight = 100;
if (weight !== 100) {
    console.log("weight is 100");
} else {
    console.log("weight is 65");
}

// to check a variable is defined or not defined 
// let vari = 29;
if (typeof vari !== "undefined") {
    console.log("vari is defined");
} else {
    console.log("vari is not defined");
}

// when we check boolean values 
let doesDrive = true;
if (doesDrive) {
    console.log("You can drive");
} else {
    console.log("You can not drive");
}

// && , ||, >, <, >=, <= operators
let doesDrink = true;
let Age = 45;
if (doesDrink && Age > 18) {
    console.log("You are adult");
} else {
    console.log("You are not adult");
}

// ternary operator 
console.log(Age == 35 ? "Age is 35" : "Age is not 35");

// switch case statement 
switch (Age) {
    case 25:
        console.log("Age is 25");
        break;

    case 35:
        console.log("Age is 35");
        break;

    case 45:
        console.log("Age is 45");
        break;

    default:
        console.log("Age is unknown age");
        break;
}