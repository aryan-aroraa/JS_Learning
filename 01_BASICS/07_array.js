const arr1 = new Array(1, 2, 3, 4, 5);
console.log(arr1);

//array methods
arr1.push(6); // inserts at end of array
console.log(arr1);

arr1.pop(); // removes last element
console.log(arr1);

arr1.unshift(0); // inserts at the beg of array
console.log(arr1);

arr1.shift(); // removes first element
console.log(arr1);

console.log(arr1.includes(3)); //true
console.log(arr1.indexOf(5)); //4, returns -1 if not available

//slice and splice
let arr2 = [1, 2, 3, 4, 5];
let newArr2 = arr2.slice(1, 3); // [2,3] doesn't include last index
console.log(newArr2, arr2); // doesnt manipulate original array

let arr3 = [1, 2, 3, 4, 5];
let newArr3 = arr3.splice(1, 3); // [2,3,4] includes last index
console.log(newArr3, arr3); // removes [2,3,4] from original array

//how to merge two or more arrays
let marvel_heros = ["spiderman", "ironman", "thor"];
let dc_heros = ["batman", "superman", "flash"];

// by concat()
let all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

// with spread operator
let all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

let another_array = [1, [2, 3, 4], 5, [6, [7, 8], 9], 0];
let another_flat_array = another_array.flat(Infinity) //takes in depth
console.log(another_flat_array);


console.log(Array.isArray("aryan"));
console.log(Array.from("aryan"));

console.log(Array.of(100,200,300))
