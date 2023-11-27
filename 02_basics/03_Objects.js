// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Rudransh",
  "full name": "Rudransh dubey",
  [mySym]: "mykey1",
  age: 18,
  location: "mumbai",
  email: "Example@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "Rudransh@github.com";
Object.freeze(JsUser); // freeze() method freezes an object. A frozen object can no longer be changed; 

JsUser.email = "Rudransh@microsoft.com";
console.log(JsUser);

JsUser.greeting = function () {   // function inside an object is called method
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
