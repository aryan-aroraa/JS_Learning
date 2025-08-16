class User {
    constructor(username){
        this.username = username
    }

    // Normal method → available to all objects created from User
    logMe(){
        console.log(`username: ${this.username}`);
    }

    // Static method → belongs to the class itself, not to instances
    static createId(){
        return `123`
    }
}

const userOne = new User("Aryan")

// ❌ ERROR: userOne.createId is not a function
// Because createId() is static, it lives on User class itself, not on userOne object
// console.log(userOne.createId());


// =========================
// Inheritance Example
// =========================
class Teacher extends User {
    constructor(username, email){
        super(username)   // call parent constructor
        this.email = email
    }
}

const teacherOne = new Teacher("Mathew", "math@gmail.com")

// ❌ ERROR again: teacherOne.createId is not a function
// Same reason → static methods don’t get copied to instances
// teacherOne.createId();

// ✅ Correct usage → call static method from the class, not instance
console.log(User.createId());     // works
console.log(Teacher.createId());  // works (inherited by subclass)
