const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros); // Expected output: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// Question: How to get flash from the above array?
console.log(marvel_heros[3][1]); // Third index is the dc_heros array and the first index of dc_heros is flash

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // Merge two arrays

const all_new_heros = [...marvel_heros, ...dc_heros]; // Spread operator ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax )

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

console.log(Array.isArray("javascipt")); // false ( "javascipt" is not an array )
console.log(Array.from("typescript"));   // from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from({ name: "User" })); // ( { name: "User" } is not an array but it is an object ) that's why it is interesting and it will return an empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
