// What was used before ES6

function User(name, pass) {
  this.name = this.name;
  this.password = pass;
}

Object.defineProperty(this, 'name', {

  get: function () {
    return this._name.toUpperCase();
  },

  set: function (value) {
    this._name = value;
  }
});

/* Do the same for the password yourself (exercise)
1. get the password in lowercase
2. set the password with the value getting passed
*/

const Sam = new User('Sam', 'SAMANTHA_SMITH_2087');
console.log(Sam.name);
