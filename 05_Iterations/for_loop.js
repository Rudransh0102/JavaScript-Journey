// for loop

// Tip 1: Use for loop when you know how many times you want to loop
// Tip 2: Try Commenting out some console.log statements to get a better understanding of the flow of the program.

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best number");
//   }
//   console.log(element);
// }
 // console.log(element);       // element is not defined !!! WHY??? Because it is block scope variable

// Second example: Nested for loop ( Multiplication table in last console.log statement )
for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
  }
}

// Third example: Looping through an array
let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);     // Guess it already!!!
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// Example Four: break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;                             // Breaks the loop
    }
   console.log(`Value of i is ${index}`);

}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;                              // Skips the current iteration
  }
  console.log(`Value of i is ${index}`);
}
