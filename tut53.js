console.log("This is external Javascript");

function greet(name, greet = "Good noon") {
    console.log(greet + " " + name);
    console.log(name + " is a good boy.")
}

function sum(a, b) {
    c = a + b;
    return c;
}

function find_Greater_leser(a, b) {
    if (a > b) {
        console.log(a + " is greater then " + b);
    } else {
        console.log(b + " is greater then " + a);

    }
}

let name = "Harry";
let name1 = "Jack";
let name2 = "Peter";
let name3 = "Marcel";
let greettext = "Good Morning";

console.log(name + " is a good boy.");
console.log(name1 + " is a good boy.");
console.log(name2 + " is a good boy.");
console.log(name3 + " is a good boy.");

greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3);

let returnval = greet(name3);
console.log(returnval);

let math = sum(1, 2);
console.log(math);

find_Greater_leser(10, 20);