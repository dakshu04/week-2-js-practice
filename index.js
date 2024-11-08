// // const fs = require('fs');

// // const data = fs.readFile('a.txt', 'utf8'); //Not syncronously-context switching - better
// // console.log(data); 
// // const data2 = fs.readFileSync('b.txt', 'utf8'); //syncronously -sequence wise
// // console.log(data2)

// function timeout() {
//     console.log("Click the button!");
// }

// console.log("Hi");
// setTimeout(timeout, 1000);
// console.log("Welcome to loupe");
// let c = 0;
// for(let i = 0; i < 1000000000; i++) {
//     c = c + 1;
// }
// console.log("Expensive operation done");

// /*
// Hi - Correct cause thread was busy performing one task so 1sec after thread free
// Welcome to loupe
// Expensive operation done
// Click the button

// Hi - Incorrect
// Welcome to loupe
// Click the button
// Expensive operation done
// */


// class Rectangle {
//     constructor(width, height, color) {
//          this.width = width;
//          this.height = height;
//          this.color = color; 
//     }
    
//     area() {
//         const area = this.width * this.height;
//         return area;
//     }
    
//     paint() {
//              console.log(`Painting with color ${this.color}`);
//     }
    
//  }
 
//  const rect = new Rectangle(2, 4, "blue");
//  const area = rect.area();
//  rect.paint();
//  console.log(area)

// const now = new Date();
// console.log(now.getFullYear());

// const map = new Map();
// map.set('name', 'daksh');
// map.set('age', 20);
// console.log(map.get('name'));