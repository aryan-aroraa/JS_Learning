// ===============================
// A simple function to set username
// ===============================
function setUsername(username) {
    // 'this.username' assigns username to the current object (context)
    this.username = username;
}

// ===============================
// Constructor function to create a user
// ===============================
function createUser(username, email, password) {
    // If we just called setUsername(username) here,
    // it would run in regular function mode, not bound to this object.
    // That means 'this' inside setUsername would point to 'undefined' in strict mode (or window in non-strict mode),
    // and the username would NOT be stored in the new object.

    // Instead, we use .call() to explicitly set 'this' to the new object being created.
    // 'this' here refers to the object that createUser() is constructing.
    setUsername.call(this, username);

    // These properties are set directly on the new object
    this.email = email;
    this.password = password;
}

// ===============================
// Creating a new user object
// ===============================
// 'new' creates an empty object → sets 'this' to it → runs createUser() → returns the object
const userOne = new createUser("Aryan", "aryan@google.com", "123");

// Logs the newly created object with username, email, and password
console.log(userOne);
