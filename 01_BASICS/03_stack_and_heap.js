// primitive type stored in stack and non-primitive in heap

let name1 = "aryan";
let name2 = name1;

name2 = "trevor"

console.log(name1);
console.log(name2);
// Primitive values (like numbers, strings, booleans) are copied by value. 

let obj = {
    name: "Aryan",
    age: 22
}

let obj1 = obj

obj1.age = 20

console.log(obj);
console.log(obj1);
// Objects, arrays, functions are copied by reference.
// This means the variable stores a reference (pointer) to the value in the heap, not the value itself.