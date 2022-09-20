// HTML Element Selectors In JavaScript

// single element selector, multiple element selector
let element = document.getElementById("firstChild");
console.log(element);

// to know the classname 
element = element.className;
console.log(element);

// to know the childnodes 
let element1 = document.getElementById("firstChild");
element1 = element1.childNodes;
console.log(element1);

// to know the parrentnodes 
let element2 = document.getElementById("firstChild");
element2 = element2.parentNode;
console.log(element2);

// changing css property 
let element3 = document.getElementById("firstChild");

element3.style.color = "red";

// innerText
let element4 = document.getElementById("firstChild");
element4.innerText = "Hello Guys";


// innerText
let element5 = document.getElementById("secondChild");
element5.innerHTML = "<b><i>Hello Guys</i></b>";

// single element query selector
let sel = document.querySelector("#firstChild");
console.log(sel);
let val = document.querySelector(".form");
console.log(val);
val.style.color = "green";

// multi element selector
let mul = document.getElementsByClassName("child");
console.log(mul);
console.log(mul[0]);
console.log(mul[3]);

// we can grab element by such a way . in this way, we can grab elements which is inside an element
let mul1 = document.getElementsByClassName("container");
console.log(mul1);
console.log(mul1[0].getElementsByClassName("child"));

// selects elements by tags 
let mul2 = document.getElementsByTagName("div");
console.log(mul2);

// forEach can't direct iterate html collectios
// Array.from(mul2).forEach(function(element) {
//     console.log(element);
//     element.style.color = "blue";
// });

// traditional for loop is an alternative way of forEach loop
// for (let index = 0; index < mul2.length; index++) {
//     const element = mul2[index];
//     console.log(element);
//     element.style.color = "blue";

// }