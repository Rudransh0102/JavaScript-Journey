class User {
  constructor(username, password) {
    this.username = username,
    this.password = password
  }

  userDetails(){
    console.log(`welcome ${this.username}`);
  }
}

class Admin extends User{
  constructor(username, email, password){
    super(username)                          // super() is used to call the constructor of the parent class
    this.email = email
    this.password = password
  }

  addModeration(){
    console.log("You are under surveillance");
  }
}

const Alex = new Admin("Alex", "Alex@random.com", "12345");
Alex.userDetails();

const Ervin = new User("Ervin", "12345");
Ervin.userDetails();

console.log(Alex instanceof Admin); // instanceof operator is used to check the inheritance of an object