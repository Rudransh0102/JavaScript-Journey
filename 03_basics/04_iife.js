// Immediately Invoked Function Expressions (IIFE)


(function dbConnection(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
} )('Rudransh')
