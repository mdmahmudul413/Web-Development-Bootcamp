// Creating, Removing & Replacing Elements
// create element 
let element = document.createElement("li");
let element2 = document.createElement("li");
let element3 = document.createElement("li");
console.log(element);

// add class to the element
element.className = "childul";
// add id to the element
element.id = "createdElement";
// we can add more attributes
element.setAttribute("title", "mytitle");
// element.setAttribute("id", "myid");

// add innertext by innerText/innerHTML
element.innerText = "Hi, Developer call";
element2.innerHTML = "<b>Another Developer call</b>"
    // if we want to add html tags then we need to use innerHTML

// append new element to DOM 
let ul = document.querySelector("ul.this");
console.log(ul);
ul.appendChild(element);
ul.appendChild(element2);



// without using innerHTML/innerText
let text = document.createTextNode("I am a textNode");
let ele = element3.appendChild(text);
ul.appendChild(element3);