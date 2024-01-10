function Person(name) {
  this.name = name;
}

function FamilyMember(name, email, password) {

  Person.call(this, name); // Using Call() to hold the reference of this in Person constructor function

  this.email = email;
  this.password = password;
}

const john = new FamilyMember("John Doe", "john@example.com", "secure123");
console.log(john);

/*
 The call() method is a predefined JavaScript method. 
 It can be used to invoke (call) a method with an owner object as an argument (parameter).
 With call(), an object can use a method belonging to another object.  
*/