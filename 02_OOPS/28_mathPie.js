// =============================
// Example 1: Property Descriptor of Math.PI
// =============================

// Get full property descriptor of "PI" inside Math object
// Descriptors tell us if a property is writable, enumerable, configurable, and what its value is
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);
// Output: { value: 3.14159..., writable: false, enumerable: false, configurable: false }
// This means PI cannot be changed, listed in loops, or reconfigured.


// =============================
// Example 2: Custom object
// =============================
const myObj = {
    name: "ball",
    price: 250,
    isAvailable: true
}

// Get descriptor of "name" property
// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));
// By default: { value: "ball", writable: true, enumerable: true, configurable: true }


// =============================
// Iterating object properties
// =============================
// for (const key in myObj) {
//     console.log(key, myObj[key]);
// }
// This would log all 3 keys (name, price, isAvailable) because by default enumerable = true


// =============================
// Redefining property descriptor
// =============================

// Using Object.defineProperty() to modify "name" property
Object.defineProperty(myObj, "name", {
    writable: false,   // Now "name" cannot be changed (assignment will be ignored in strict mode throws error)
    enumerable: false, // Now "name" won't appear in loops like for...in
    // configurable defaults to false here (unless explicitly set)
})

// Check descriptor after modification
// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));
// Output: { value: "ball", writable: false, enumerable: false, configurable: false }


// =============================
// Iterating object again
// =============================
for (const key in myObj) {
    console.log(key, myObj[key]);
}
// Output will only show: 
// price 250
// isAvailable true
// Because "name" is now enumerable: false, so it is hidden from loops.
