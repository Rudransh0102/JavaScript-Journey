//FUN WITH JAVASCRIPT

/*"getOwnPropertyDescriptor()" method returns a property descriptor for an own property 
(that is, one directly present on an object and not in the object's prototype chain) of a given object.*/

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")   
console.log(descripter);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);   // PI value cannot be changed

const lang = {
    name: 'JavaScript',
    founder: 'Brendan Eich',
    isAwesome: true,

    doYouKnow: function(){
        console.log("Yes I know " + this.name);
    }
}
console.log(Object.getOwnPropertyDescriptor(lang, "name"));

/*"defineProperty()" method defines a new property directly on an object, 
or modifies an existing property on an object, and returns the object.*/

Object.defineProperty(lang, 'name', {   
   //writable: false,  
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(lang, "name"));

for (let [key, value] of Object.entries(lang)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}