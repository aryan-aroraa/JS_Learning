// IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that runs immediately after it is defined.

// Why use IIFE?
// Global variables can accidentally get overwritten or conflict with other scripts.
// IIFE keeps variables inside a local scope, so they don’t leak into the global space.


(function one(){
    console.log("hi")
})(); // never forget ';'

//arrow function works too
(()=>{
    console.log("hi once again")
})();

//passing an argument
((name)=>{
    console.log(`how are you ${name}`)
})("aryan")