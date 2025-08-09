// Array of numbers
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ---------------------- FILTER ----------------------
// filter() → Creates a new array containing elements that satisfy the given condition
let newNums = nums.filter((num) => num > 4); // Keeps only numbers greater than 4
console.log(newNums); // [5, 6, 7, 8, 9, 10]

// ---------------------- MAP ----------------------
// map() → Creates a new array by applying a function to each element
let myNums = nums.map((num) => num + 4); // Adds 4 to each number
console.log(myNums); // [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// ---------------------- CHAINING ----------------------
// You can chain multiple array methods together
let anotherNums = nums
                  .map((num) => num * 10)  // Multiply each number by 10
                  .map((num) => num + 1)   // Add 1 to each result
                  .filter((num) => num > 50) // Keep only numbers greater than 50
console.log(anotherNums); // [  51,  61,  71,  81,  91, 101 ]

// ---------------------- REDUCE ----------------------
// reduce() → Reduces array to a single value by applying a function on each element
const initialValue = 0; // Starting value for the accumulator

const reducedArray = nums.reduce((acc, currVal) => {
    // acc → accumulator (holds the running total)
    // currVal → current element in the array
    console.log(`Acc: ${acc} and currval: ${currVal}`);
    return acc + currVal; // Add current value to accumulator
}, initialValue);

console.log(reducedArray); // Final sum of numbers: 55
