// ========================
// PROMISE ONE
// ========================

// Create a new Promise object
// Promise constructor takes a function with two arguments: resolve (success) and reject (failure)
const promiseOne = new Promise(function(resolve, reject) {
    // Simulate an asynchronous operation with setTimeout (runs after 1 second)
    setTimeout(() => {
        console.log("Promise one finish"); // Logs when the async task completes
        resolve(); // Call resolve() to indicate success
    }, 1000);
});

// Consume (use) promiseOne with .then() to handle success
promiseOne.then(function() {
    console.log("Promise one resolved"); // This runs after resolve() is called
});


// ========================
// PROMISE TWO (Direct Creation without variable)
// ========================

// Create another Promise without storing it in a variable
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("promise 2 finished"); // Message after delay
        resolve(); // Resolve the promise
    }, 1000);
})
.then(function() {
    console.log("Promise 2 resolved"); // Runs when promise resolves
});


// ========================
// PROMISE THREE (Returning Data)
// ========================

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("promise 3 finished"); // After 1s
        // Passing an object as resolved data
        resolve({ username: "aryan", age: 20 });
    }, 1000);
});

// .then() receives the resolved value (the object)
promiseThree.then(function(user) {
    console.log(user); // Logs: { username: "aryan", age: 20 }
});


// ========================
// PROMISE FOUR (Error handling, chaining, finally)
// ========================

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false; // Change to true to simulate an error
        if (!error) {
            resolve({ username: "aryan", age: 20 }); // Success case
        } else {
            reject("ERROR: Something went wrong"); // Failure case
        }
    }, 1000);
});

promiseFour
.then(function(user) {
    console.log(user); // Logs the resolved object
    return user.username; // Pass username to the next .then()
})
.then(function(username) {
    console.log(username); // Logs only the username
})
.catch(function(err) {
    // Runs if promise is rejected or an error happens in .then()
    console.log(err);
})
.finally(function() {
    // Runs no matter success or failure
    console.log("I will run everytime");
});


// ========================
// PROMISE FIVE with async/await
// ========================

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "aryan", age: 20 }); // Successful resolve
        } else {
            reject("ERROR: Something went wrong"); // Failure
        }
    }, 1000);
});

// Async function to consume promiseFive
async function consumePromiseFive() {
    try {
        // Await pauses execution until promiseFive is resolved or rejected
        const response = await promiseFive;
        console.log(response); // Logs the resolved object
    } catch (error) {
        // Runs if promiseFive is rejected
        console.log(error);
    }
}
consumePromiseFive();


// ========================
// FETCH API with async/await (Commented Out)
// ========================

// Example of fetching data from an API using async/await
// async function getData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users");
//         let data = await response.json(); // Convert response to JSON
//         console.log(data); // Logs array of users
//     } catch (error) {
//         console.log("E: ", error); // Logs fetch errors
//     }
// }
// getData();


// ========================
// FETCH API with .then()
// ========================

// Fetch makes a GET request to the given URL
fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response) {
    return response.json(); // Convert raw response into JSON
})
.then(function(data) {
    console.log(data); // Logs array of users from API
})
.catch((error) => console.log(error)); // Handles any error during fetch or JSON conversion
