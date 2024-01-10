# Javascript Classes and OOPs

Q. does javascript have classes? NO (but it has prototypes)
Q. what are objects in javascript? key-value pairs (collection of properties and methods)
Q. does javascript have constructors? YES (but it has prototypes)

Q. does functions have prototypes and can act like objects ? YES, in JavaScript, functions can act like objects. This is because functions are first-class citizens, which means they can be treated like any other data type, including objects.

## Classes

### Class Declaration

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}
```

## Why use OOPs? ( Object literal {...} )

ans. Object Oriented Programming (OOP) helps you structure your code to model real world things and encapsulate functionality. This way, you can easily reuse objects in your code.

## Parts of OOPs :

=> Object literals
=> Constructors functions
=> Prototypes
=> Instances( The 'this , new' keyword )
=> Classes

## 4 Pillars of OOPs :

1. Encapsulation (data hiding)
2. Abstraction (reduce complexity and isolate impact of changes)
3. Inheritance (eliminate redundant code)
4. Polymorphism (refactor ugly switch/case statements)

## `instanceof` Operator in Javascript

The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

Syntax : `object instanceof constructor`

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const auto = new Car("Honda", "Accord", 1998);
console.log(auto instanceof Car); // expected output: true
```

# Notes of object.js

## 1. Constructor Functions and Instances:

```javascript
function Multiply() {
  this.multiply = function (a, b) {
    return a * b;
  };
}
const multiplier = new Multiply();
console.log(multiplier.multiply(2, 3));
```
### Explanation:
1. Multiply is a constructor function that defines a method called multiply.
2. We create an instance (multiplier) using the new keyword, allowing us to use the multiply method.
3. Example: Imagine you have a calculator (Multiply) that you can use (multiplier) to multiply numbers easily.

## 2. Adding Properties to Constructor Functions:

```javascript
Multiply.power = 10;
console.log(Multiply.power);
```
### Explanation:
1. We can add properties directly to the constructor function itself, in this case, power is added to Multiply.
2. Example: Consider a power source (Multiply) with a fixed power level (power), and you can access this level directly.

## 3. Prototype:

```javascript
Copy code
console.log(Multiply.prototype);  // Output: {}
```
### Explanation:
1. Every function in JavaScript has a prototype property, initially an empty object.
2. This prototype is shared among all instances created from the constructor function.
3. Example: Think of a blueprint (Multiply.prototype) for creating objects. Each object created using that blueprint has certain shared characteristics.

## 4. Checking for Prototype Property:

```javascript
console.log(Multiply.hasOwnProperty('prototype'));  // Output: true
```
### Explanation:
1. We check if the constructor function itself has a property named prototype.
2. Example: It's like checking if a factory (Multiply) has a manual (prototype) to create products.

## 5. Prototype Inheritance:

```javascript
function createUser(name, score) {
  this.name = name;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

const User1 = new createUser("John", 10);
const User2 = new createUser("Jane", 20);
```

### Explanation:
1. We create a new constructor function createUser to represent users with name and score properties.
2. We add a method (increment) to the prototype, which allows instances to increment their scores.
3. Example: Think of a user management system (createUser). Each user (User1, User2) has a name and a score, and they share a common method to increase their scores (increment).


# Getter and Setter

## 1.Getter and Setter Overwriting:

When you declare a getter or setter with the same name as an existing property, it effectively overwrites that property. In the file `10_GetterSetter.js`, the "get email" and "set email" methods overwrite the "email" property with a new property called "_email".

## 2.Recursion Issue:

If you use the same name for a property in both the class constructor and the getter, it can lead to unintended recursion. In the file `10_GetterSetter.js`, if you use email as both a property in the constructor and the getter, calling "Alex.email" would continuously invoke the getter, leading to a stack overflow.