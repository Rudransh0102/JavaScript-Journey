// Immediately Invoked Function Expressions (IIFE)

// IIFE is a JavaScript function that runs as soon as it is defined.
// Syntax: (function(){})();


(function dbConnection(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
} )('Rudransh')


