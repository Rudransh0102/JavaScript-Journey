const User = {
  name: "John",
  age: 30,
  email: "Example@google.com",
} 

const Manager = {
  isAvailable: true,
}

const SeniorDeveloper = {
  isAvailable: true,
}

// This is old way of doing inheritance
const JuniorDeveloper = {
  isAvailable: false,
  __proto__: SeniorDeveloper,    // Referencing the SeniorDeveloper object as the prototype of JuniorDeveloper object
}

Manager.__proto__ = User; // Referencing the User object as the prototype of Manager object

// Modern way of doing inheritance

Object.setPrototypeOf(SeniorDeveloper, User); // Referencing the User object as the prototype of SeniorDeveloper object

let Lang = "          JavaScript        ";

String.prototype.OGlen = function () {
  return this.replace(/^\s+|\s+$/g, "");    // This is a regular expression to remove the white spaces from the string
};
console.log(Lang.OGlen().length); // JavaScript

String.prototype.newOGlen = function () {
  return this.trim();    // Either use the above method or trim method
}
console.log(Lang.newOGlen().length); // JavaScript