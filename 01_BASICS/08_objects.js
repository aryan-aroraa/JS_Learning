const mySym = Symbol("key1")

const JsUser = {
    name: "Aryan",
    "full name": "Aryan Arora",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "aryan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser[mySym]); // "mykey1"

// Object.freeze(JsUser) // now the array cant be changed
// JsUser.email = "aryan@microsoft.com" // this will not change
// console.log(JsUser);

// adding a function called 'greeting' inside the object
JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting);  // [Function (anonymous)]
// console.log(JsUser.greeting());  // Hello JS user
// console.log(JsUser.greetingTwo());  // Hello JS user

// diff btw singleton and non-singleton object
