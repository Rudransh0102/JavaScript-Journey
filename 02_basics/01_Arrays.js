// Arrays in JavaScript

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[1]); // 1

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2); // [1, 2, 3, 4]



// Array methods 

const array = [0, 1, 2, 3, 4, 5];

// Array.push(6)  // add to the end
// Array.push(7)  // add to the end
// Array.pop()    // remove from the end

// Array.unshift(9)  // add to the start
// Array.shift()     // remove from the start

// console.log(Array); // [0, 1, 2, 3, 4, 5, 6]


const myArr3 = [2, 8, 10, 5, 7];
// console.log(myArr3.includes(10));   // true ( 10 is in the array )
// console.log(myArr3.indexOf(10));    // 2 ( 10 is in the index 2 )

const myHeros = ["superman", "spiderman", "batman", "ironman"];
const totalHero = myHeros.join("-");

console.log(myHeros, "\n");  // use \n for new line
console.log(totalHero);     // superman-spiderman-batman-ironman


// slice, splice

// Example 1 showing slice

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));  // Expected output: ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));  // Expected output: ["camel", "duck"]

console.log(animals.slice(1, 5));  // Expected output: ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));    // Expected output: ["duck", "elephant"]

console.log(animals.slice(2, -1));  // Expected output: ["camel", "duck"]

console.log(animals.slice());  // Expected output: ["ant", "bison", "camel", "duck", "elephant"]

// Example 2 showing splice

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');  // Inserts at index 1
console.log(months);  // Expected output: ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');  // Replaces 1 element at index 4
console.log(months);   // Expected output: ["Jan", "Feb", "March", "April", "May"]

// Example 3 showing slice and splice

const Flowers = ["rose", "tulip", "lily", "jasmine", "lotus"];
console.log("A: ", Flowers); 

const sliced = Flowers.slice("1", "3");
console.log("B: " , sliced);  // Gives the elements from index 1 to 3 ["tulip", "lily"]

const spliced = Flowers.splice(3, 1, "sunflower");
console.log("C: ", spliced);  // Gives the removed elements ["jasmine"]

console.log("A*: ", Flowers); // ["rose", "tulip", "lily", "sunflower", "lotus"]
