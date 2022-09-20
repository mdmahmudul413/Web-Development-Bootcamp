// Understanding DOM & Creating a Website Layout

// DOM: Document Object Model 
let a = document;
console.log(a);

// To see all tags of DOM 
console.log(document.all);

//body
console.log(document.body);

// forms
console.log(document.forms);
// to find exact form 
console.log(document.forms[0]);
console.log(document.forms[1]);

// Array.from(b) is used to make b as an array 
let b = document.all;
Array.from(b).forEach(function(element) {
    console.log(element);
});

// to get all links from a page
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].href);

// to get images information 
console.log(document.images);
console.log(document.images.length);
console.log(document.images[0]);
console.log(document.images[0].src);
console.log(document.images.item(0));
console.log(document.images.item(0).src);
console.log(document.images.namedItem("bike"));
console.log(document.images.namedItem("bike").src);


// to get script information 
console.log(document.scripts);
console.log(document.scripts.length);
console.log(document.scripts[0]);
console.log(document.scripts[1]);