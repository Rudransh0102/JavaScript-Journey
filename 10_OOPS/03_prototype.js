let myName = "Insane    ";
let mychannel = "javascript     ";

//console.log(myName.trueLength);

let lang = ["Javascript", "Python", "Ruby", "Java", "C"];

let JavaScript = {
  name: "JavaScript",
  founder: "Brendan Eich",
  year: 1995,
  paradigm: "OOps",
  oops: true,

  Whofounded: function () {
    console.log(`${this.founder}`); // How this method knows that it has to print the founder property of JavaScript object???
  },
};

JavaScript.Whofounded();

// Adding a new method to the prototype ( for all the objects)
Object.prototype.OurMethod = function () {
  console.log("This prototype is added to all the objects in codebase");
};
JavaScript.OurMethod(); // You know why this works !!!
lang.OurMethod(); // Oviously though lang is an array but it is also an object

Array.prototype.Hello = function () {
  console.log("This prototype is added to all the arrays in codebase");
};
lang.Hello(); // This works because lang is an array
JavaScript.Hello(); // This will not work because JavaScript is not an array

// Now you know Object is the TOP LEVEL HIERARCHY in JS

/* 
 I know it was not asked but you should know this:

 JavaScript has a prototype-based inheritance model, where objects can inherit properties and methods from other objects.
 The "Object" is indeed a top-level object in JavaScript. 
 All objects in JavaScript inherit from the "Object" prototype, and this prototype chain continues up until the "Object" prototype itself.
 At the top of this chain is the "Object.prototype". 
 This means that all objects in JavaScript, either directly or indirectly, inherit properties and methods from "Object.prototype".

               Object --> Object.prototype --> null

 In the above diagram, 
  "Object" is a constructor function for creating objects, 
  "Object.prototype" is the prototype object associated with all instances created by "Object", and 
  "null" represents the end of the prototype chain.
*/
