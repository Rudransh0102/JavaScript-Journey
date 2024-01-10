class User {
  constructor(username){
      this.username = username
  }

  Print(){
      console.log(`Username: ${this.username}`);
  }

  static createId(){
      return `123`
  }
}

const alexa = new User("alexa")
// console.log(alexa.createId()) // Not Allowed as createId() is a static method and can only be called by the class itself

class Teacher extends User {
  constructor(username, email){
      super(username)
      this.email = email
  }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());   // Now you know why there is a type error in the console