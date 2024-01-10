// Try making a simpler version of the User class, I got you covered with the complex one:
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  encryptUserPass() {
    return this.password.split("").reverse().join("");
  }

  encryptUserEmail() {
    return this.email.replace(/@.*?(?=\.\w+)/, (match) => '*'.repeat(match.length));
  }

  getEncryptedDetails() {
    console.log(`welcome ${this.name}`);
    return {
      username: this.name,
      encryptedPassword: this.encryptUserPass(),
      encryptedEmail: this.encryptUserEmail(),
    };
  }
}

let UserOne = new User("John","Example@gmail.com", "secure123");

console.log(UserOne.getEncryptedDetails());  // Too simple , isn't it ??

/* Try playing with it (DIY) !!!

=> As we already learnt how to create a self-calling function and an arrow function :
1. Define the "SelfLogUser" function as a self-calling function.
2. Define the "ArrowLogUser" function using the arrow function syntax.
3. Ensure that both functions log the encrypted details obtained from UserOne.getEncryptedDetails().

*/

// BEHIND THE SCENE : 

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

User.prototype.encryptUserPass = function(){
  return this.password.split("").reverse().join("");
}

User.prototype.encryptUserEmail = function(){
  return this.email.replace(/@.*?(?=\.\w+)/, (match) => '*'.repeat(match.length));
}

User.prototype.getEncryptedDetails = function(){
    console.log(`welcome ${this.name}`);
    return {
      username: this.name,
      encryptedPassword: this.encryptUserPass(),
      encryptedEmail: this.encryptUserEmail(),
  }
}

let UserOne1 = new User("John","Example@gmail.com", "secure123");

console.log(UserOne1.getEncryptedDetails());
