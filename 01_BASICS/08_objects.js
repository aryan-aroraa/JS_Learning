const mySym = Symbol("key1");

const JsUser = {
  name: "Aryan",
  "full name": "Aryan Arora",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "aryan@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser[mySym]); // "mykey1"

// Object.freeze(JsUser) // now the array cant be changed
// JsUser.email = "aryan@microsoft.com" // this will not change
// console.log(JsUser);

// adding a function called 'greeting' inside the object
JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// console.log(JsUser.greeting);  // [Function (anonymous)]
// console.log(JsUser.greeting());  // Hello JS user
// console.log(JsUser.greetingTwo());  // Hello JS user, {name}

// diff btw singleton and non-singleton object

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 1, d: 2 };

// let obj3 = {obj1, obj2} // object inside object problem
let obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// or we can do the same using the spread operator
let obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

// console.log(Object.keys(JsUser))
// console.log(Object.values(JsUser))
// console.log(Object.entries(JsUser))
// console.log(JsUser.hasOwnProperty("isLoggedIn"));

// object de-structuring
const { lastLoginDays: lld } = JsUser;
console.log(lld);
