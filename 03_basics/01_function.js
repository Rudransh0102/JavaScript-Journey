function sayMyName() {
  console.log("h");
  console.log("e");
  console.log("l");
  console.log("l");
  console.log("o");
}

sayMyName();

// ----------- ------------------ ------------------

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

function addTwoNumbers_02(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers_02(3, 5);
console.log("Result: ", result);

// ---------- ------------------ ------------------

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("John"))
console.log(loginUserMessage("Jessica"))

// ----------- ------------------ ------------------

function calculateCartPrice(val1, val2, ...num1) {           // Rest parameter ( ...num1 ) , It will take all the values and store it in an array
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000))         // Output : [ 500, 2000 ] , { Val1=100, Val2=200, num1=[500, 2000] }

// ----------- ------------------ ------------------

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

// ----------- ------------------ ------------------

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));                   // Output : 400
console.log(returnSecondValue([200, 400, 500, 1000]));        // Output : 400
