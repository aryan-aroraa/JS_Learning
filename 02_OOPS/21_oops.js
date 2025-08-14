// =========================
// OBJECT LITERAL APPROACH
// =========================

// Create an object 'user' with properties and a method
const user = {
    username: "Aryan",        // property: stores username
    isLoggedIn: true,         // property: boolean indicating login status
    loginCount: 12,           // property: number of logins

    // Method to display user details
    getUserDetails: function() {
        // 'this' refers to the current object (user)
        console.log(`Username: ${this.username}`);
        // Logs the whole object itself
        console.log(this);
    }
}

// Calling the method inside user and logging the return value
// Note: getUserDetails() doesn't return anything → so console.log will log undefined after running the function
console.log(user.getUserDetails());


// =========================
// CONSTRUCTOR FUNCTION APPROACH
// =========================

// Function constructor to create multiple user objects
function User(username, isLoggedIn, loginCount) {
    // Assign parameters to object properties using 'this'
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    // Adding a method to each created object
    this.greeting = function() {
        console.log("Welcome,", this.username);
    }

    // 'return this' is optional here because 'new' keyword automatically returns the object
    return this;
}

// Creating instances (objects) using 'new'
// 'new' creates an empty object, sets 'this' to that object, and links it to the prototype
const userOne = new User("Aryan", true, 11);
const userTwo = new User("hitesh", false, 9);

// Logs the full objects created by the constructor
console.log(userOne);
console.log(userTwo);

// Calling the greeting method on userOne
// greeting() prints message, then console.log logs undefined (because greeting() has no return)
console.log(userOne.greeting());

// 'constructor' property shows which function created the object
console.log(userOne.constructor);
