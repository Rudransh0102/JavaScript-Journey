// Try to run the code with properties first and check errors and then use _properties 

class User {
  constructor(email, password){
      this.email = email;                   // Regular property
      this.password = password
  }
  // Getter and Setter are overwriting the properties
  get email(){
      return this._email.toUpperCase()        // Cannot use email as it will call the getter again and again
  }
  set email(value){
      this._email = value                    // _email is a private property as it starts with underscore( _ )
  }

  get password(){
      return `${this._password}xeger`        // password and _password are different properties
  }

  set password(value){
      this._password = value                // _password is a private property too which cannot be accessed outside the class
  }
}

const Alex = new User("Alex@human.com", "regex")
console.log(Alex.email);

/* Important Note:
In JavaScript, using an underscore prefix (like _founder) is a convention 
often used to indicate that a property is intended to be private or internal. 
However, it does not enforce true privacy or prevent direct access from outside the object. 
It's a convention that signals to other developers that a particular property or 
method is intended for internal use and should not be accessed directly. */

/*
 Read more about Getters, Setters and why need to use different properties in it in notes.md  
*/