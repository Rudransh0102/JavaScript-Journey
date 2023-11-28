// --------------- Ways of Creating a function  ----------------

const { m } = require("framer-motion");

// 1. By using function keyword in an object ( Method declaration )

const user = {                                             // Object declaration
  username: "Hello_friend",
  price: 199,
  welcomeMessage: function () {                             // Method declaration
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};
user.welcomeMessage();
console.log(this);                             // It will return window object { window is a global object in browser } , Output: {}

// 2. By ( Function declaration )

function Func_01() {
  let username = "joe";
  console.log(this.username);                 // It will give undefined as username is declared with let keyword and it is not a property of the "this" object.
}

// 3. By ( Function expression )

const Func_02 = function () {
  let username = "Jane";
  console.log(this.username);                  // Now, Find a way out to use this.username in this function !!!
};

// 4. By ( Arrow function ) 

const Func_03 = () => {
  let username = "hello";
  console.log(username);
};

Func_01();
Func_02();
Func_03();


const addTwo = (num1, num2) => {
    return num1 + num2                                   // Explicit return , we have to use return keyword as we are using curly braces
}

const addTwo_02 = (num1, num2) =>  num1 + num2              // Implicit return

const addTwo_03 = (num1, num2) => ( num1 + num2 )           // If we use parenthesis then we don't have to use return keyword

const addTwo_04 = (num1, num2) => ({ username: "hello" });     // Returning an object
console.log(addTwo(3, 4));                                  


const myArray = [2, 5, 3, 7, 8]
myArray.forEach((item) => console.log(item))                // forEach() method executes a provided function once for each array element.

const myArray_02 = [4, 9, 6, 2, 1]
myArray_02.forEach((item, index) => console.log(item, index))   // forEach() method also takes index as a parameter and returns index of each element in the array.
 
// Now you know how to use forEach() method, let's see how to use it with other methods.

// myArray_02.forEach( function() {} )
// myArray_02.forEach( () => {} )
// myArray_02.forEach( () => () )