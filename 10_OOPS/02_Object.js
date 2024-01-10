function Multiply() {
  this.multiply = function (a, b) {
      return a * b;
  }
}

// Create an instance of Multiply
const multiplier = new Multiply();

// Use the multiply method
console.log(multiplier.multiply(2, 3));  // Output: 6

Multiply.power = 10;
console.log(Multiply.power);  // Output: 10
console.log(Multiply.prototype);  // Output: {}
console.log(Multiply.hasOwnProperty('prototype'));  // Output: true

//Method 1

// Check method one in notes.md

//Method 2

function CreateUser(name, score) {
  this.name = name;
  this.score = score;
}

CreateUser.prototype.increment = function () {
  this.score++;
};

CreateUser.prototype.printMe = function () {
  console.log(`${this.name} has a score of ${this.score}`);
}

const User1 =  CreateUser("Alex", 10);
const User2 = new CreateUser("Dong Lee", 20);

User4.printMe(); // Dong Lee has a score of 20

User3.printMe();  // You got a TypeError? Why? solve it or probably you missed or fogot the important thing we learnt in oops.js !!!


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/