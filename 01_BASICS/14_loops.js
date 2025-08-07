// ---------------------- for...of loop ----------------------
// for...of is mainly used to iterate through iterable objects like arrays, strings, maps, sets.

// Example 1: Iterating through an array
// let arr = ["Aryan", "Anish", "pranav", "manav"]
// for (const item of arr) {
//     console.log(item);  // Prints each element of the array
// }

// Example 2: Iterating through a string
// let str = "aryan"
// for (const item of str) {
//     console.log(item);  // Prints each character of the string
// }

// ---------------------- for...of with Map ----------------------
const maps = new Map() // Creating a Map (key-value pairs)
maps.set("js", "javascript")
maps.set("cpp", "C++")
maps.set("py", "python")
maps.set("py", "python") // Duplicate keys are ignored in Map
maps.set("rb", "ruby")

// Iterating through Map using for...of
// for (const [key, value] of maps) {
//     console.log(`${key} stands for ${value}`)
// }

// ---------------------- for...of with Object ----------------------
// NOTE: Objects are not directly iterable with for...of
const games = {
    "game1": "spiderman",
    "game2": "batman"
}
// for (const [key, value] of games) {
//     console.log(key, value); // ❌ This will not work for plain objects
// }

// ---------------------- for...in loop ----------------------
// for...in is mainly used to iterate over the keys of an object
const movies = {
    "movie1": "spiderman",
    "movie2": "batman"
}

for (const key in movies) {
    // key → property name, movies[key] → value of that property
    console.log(`${key} and value is ${movies[key]}`)
}

// ---------------------- forEach loop ----------------------
// forEach is used for arrays and takes a callback function
// Callback receives: (currentItem, index, entireArray)
const coding = ["js", "ruby", "cpp", "python"]

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})
