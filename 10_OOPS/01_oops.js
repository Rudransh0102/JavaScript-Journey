const users = {
  name: "John",
  age: 30,
  email: "example@example.com",

  userDeatils: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`); // this refers to the current object
    console.log(this); // will print the current object
  },
};

console.log(users.name); // John
console.log(users.userDeatils()); // Name: John, Age: 30, Email:example@examplecom
console.log(this); // will print the window object or the global object {}

// -------------------Constructors-------------------
// Constructor is a function that is used to create an object
// const promise = new Promise();
// const date = new Date();

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  this.userDeatils = function () {
    console.log(`welcome ${this.name}`);
  }

  return this; // if we wont return this, still it will return the object for constructor function using the "new" keyword only
}

const UserOne = User("John", 30, "example@ex.com");
console.log(UserOne); // {name: "John", age: 30, email: "example@ex.com"}
UserOne.userDeatils(); // welcome John

const UserTwo = User("Jane", 25, "javascript@node.com");
console.log(UserOne); // Attention: the UserOne object is overwritten by UserTwo object because of not using the "new" keyword

const Userthree = new User("Branden", 18, "branden@ex.com");
console.log(Userthree); // {name: "Branden", age: 18, email: "branden@ex.com"}

console.log(Userthree.constructor); // Constructor gives the function name that is used to create the object
console.log(Userthree instanceof User); // true


