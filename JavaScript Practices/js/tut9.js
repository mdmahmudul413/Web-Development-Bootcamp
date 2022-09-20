// For, While & Do while Loops in JavaScript

// Loops: for, while, do while, forEach 

// For Loop
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// While Loop
// let a = 0;
// while (a != 100) {
//     console.log(a);
//     a++;
// }

// Do While 
// let b = 0;
// do {
//     console.log(b);
//     b++;
// } while (b != 100);
// note: Do while loop will run at least one time if the condition will false

// Break & Continue 
// Break 
// let c = 0;
// do {
//     console.log(c);
//     c++;
//     if (c == 5)
//         break;
// } while (c != 10);

// Continue 
// let d = 0;
// do {
//     if (d == 5) {
//         d++;
//         continue;
//     }
//     console.log(d);
//     d++;
// } while (d != 10);

// ForEach Loop
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach(function(element) {
//     console.log(element);
// });
// Same task using For Loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// We can use multiple argument in ForEach Loop
// arr.forEach(function(element, index, array) {
//     console.log(element, index, array);
// });

// For in Loop
// let obj = {
//     name: "Mahmud",
//     Age: 25
// }

// for (let a in obj) {
//     console.log(`The ${a} of objetct is ${obj[a]}`);
// }