// =============================
// String prototype example
// =============================

let myName = "Aryan     "; // String with trailing spaces

console.log(myName.length); // Output: 10 (spaces are counted in length)

// Adding a custom method to the String prototype
String.prototype.trueLength = function() {
    // 'this' refers to the string on which the method is called
    console.log(`${this}`); // Logs the string itself
    // trim() removes leading/trailing spaces → get actual length
    console.log(`True Length: ${this.trim().length}`);
}

// Now all string objects can use trueLength()
myName.trueLength();


// =============================
// Object prototype example
// =============================

const myHero = ["thor", "spiderman"]; // Array
const heroPower = {
    thor: "hammer",
    spiderman: "sling"
}

// Adding a method to Object prototype
Object.prototype.hiHero = function() {
    console.log("Hello from hero");
}

// Now *every* object (and array, function, etc.) inherits hiHero()
// Why? Because Array → Object in prototype chain
heroPower.hiHero(); // Works because heroPower is an object
myHero.hiHero();    // Works because arrays are also objects


// =============================
// Array prototype example
// =============================

// Adding a method only for arrays
Array.prototype.arrHero = function() {
    console.log("Hero says hii");
}

// Works for arrays
myHero.arrHero();

// Doesn't work for heroPower because heroPower is NOT an array
// heroPower.arrHero(); // ❌ ERROR: arrHero is only in Array.prototype


// =============================
// Prototype Inheritance
// =============================

const teaching = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teaching // Old way to set prototype
}

// Modern way to set prototype
Object.setPrototypeOf(TASupport, teaching);

// Now TASupport inherits properties from teaching
console.log(TASupport.isAvailable); // true (inherited)
