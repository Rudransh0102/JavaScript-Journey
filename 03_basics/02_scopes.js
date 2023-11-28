//var c = 300  // global scope variable and not recommended

let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);   
}

// console.log("INNER: ", b);   // ReferenceError: b is not defined
console.log("OUTER: ", a);   // Output : 300


function one(){
    const username = "Insane"

    function two(){
        const website = "youtube"
        console.log(username);          // It will not display untill you call two() function
    }
    // console.log(website);              // ReferenceError: website is not defined ( because it is inside two() function )

     two()                              // It will display username but not untill you call "one()" function outside of it

}

 one();                                 // Output : Insane, Workflow: { one() -> two() -> username }

if (true) {
    const username = "You"
    if (username === "You") {
        const website = " youtube"
       console.log(username + website);        // Output : You youtube
    }
    // console.log(website);                   // ReferenceError: website is not defined ( It was  declared inside if block so it will not be accessible outside of it )
}

// console.log(username);                      // Now You Know the answer, Aren't you ?


// ++++++++++++++++++ interesting ++++++++++++++++++
// Read about hoisting in JavaScript for more fun and knowledge


console.log(addone(5))              // Output : 6

function addone(num){              // Function declaration
    return num + 1
}



// addTwo(5)                         // ReferenceError: Cannot access 'addTwo' before initialization ( execution context is not created yet )
// const addTwo = function(num){     // Function expression
//     return num + 2
// }