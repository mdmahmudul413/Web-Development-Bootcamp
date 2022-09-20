console.log("Hello Guys.......");
const name = "harry";
const greeting = "Good Morning";
console.log(name + " " + greeting)

// String Concatenation type 1
let html = "I am Harry." + " " + "I am a Web Developer.";
console.log(html);

// String Concatenation type 2
html = html.concat(" " + "I love to make." + " " + "Websites daily.");
console.log(html);

// Calculating String Length 
console.log("String length: " + html.length);

// Uppercase String  
console.log("Uppercase: " + html.toUpperCase());

// Lowercase String  
console.log("Lowercase: " + html.toLowerCase());

// Printing String character by index number 
console.log(html[0]);
console.log(html[5]);
console.log(html[9]);
console.log(html[15]);

// indexOf(""), to know the index number of a specific word/substring 
console.log(html.indexOf("Harry"));

// lastIndexOf(""), to know the last index number of a specific word/substring 
console.log(html.lastIndexOf("I"));

// charAt() returns the character at a specific index that is given in the bracket
console.log(html.charAt(2));

// endsWith("") returns a boolean value true/false
console.log(html.endsWith("daily."));
console.log(html.endsWith("tomorrow."));

// includes("") returns true if the supplied substring is in the main string otherwise false 
console.log(html.includes("Developer"));
console.log(html.includes("Analyst"));

// substring(starting index, ending index) to get a substring from a string 
console.log(html.substring(0, 10));

// slice(starting index, ending index) to get a substring from a string and slice(- value) returns a substring from the last position of the main string 
console.log(html.slice(0, 10));
console.log(html.slice(-4));

// spit(" ") is a vary important function. It breaks the main string into substrings and store those substrings in an array 
console.log(html.split(" "));
console.log(html.split(""));
console.log(html.split("k"));

// replace(" "," ") it will replace the the first substring only. Will replace with the given 2nd string 
console.log(html.replace("Harry", "Mahmud"));

// template literals 
let fruit1 = "Orange";
let fruit2 = "Apple";
// Inside Backtics(``) we can use single/double quotes 
let myHtml = `${greeting} ${name}
                <h1>This is "heading"</h1>
                <p>My name <b><i>Md Mahmudul Islam.</i></b></p>
                ${fruit1} & ${fruit2} are my favourite fruits.`;
console.log(myHtml);

document.body.innerHTML = myHtml;