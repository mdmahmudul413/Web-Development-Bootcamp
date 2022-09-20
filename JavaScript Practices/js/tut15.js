// Children, Parent & Traversing the DOM
let cont = document.querySelector(".container");
console.log(cont);

// Grab all child nodes including Text, comment, element etc 
console.log(cont.childNodes);

// Grab only elements 
console.log(cont.children);

// Getting Node Name
console.log(cont.childNodes[1].nodeName);

// Getting Node Type
console.log(cont.childNodes[1].nodeType);
console.log(cont.childNodes[0].nodeType);

// Node Types List 
// 1=Element
// 2=Attribute
// 3=Text Node
// 8=Comment
// 9=document
// 10= doctype

// we can grab parrent & its childern & also its children & so on 
let container = document.querySelector("div.container");
console.log(container.children);
console.log(container.children[2]);
console.log(container.children[2].children);
console.log(container.children[2].children[0]);
console.log(container.children[2].children[0].children);
console.log(container.children[2].children[0].children[0]);

// firstChild ,firstElementChild, lastChild & lastElementChild
let con = document.getElementsByClassName("container");
console.log(con[0].childNodes);
console.log(con[0].firstChild);
console.log(con[0].firstElementChild);
console.log(con[0].lastChild);
console.log(con[0].lastElementChild);

// childElementCount
console.log(con[0].childElementCount);

// nextSibling & nextElementSibling
console.log(con[0].firstChild);
console.log(con[0].firstChild.nextSibling);
console.log(con[0].firstChild.nextSibling.nextSibling.nextSibling); //we can trvarse like this
console.log(con[0].firstElementChild);
console.log(con[0].firstElementChild.nextElementSibling);