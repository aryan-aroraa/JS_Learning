const user = {
    username: "aryan",
    price: 200,

    // Method 'welcomeMessage' defined using a normal function
    // This function logs a welcome message using the 'username' property
    welcomeMessage: function(){
        // 'this.username' refers to the 'username' inside this object ('user')
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this); // {} bcz we in node environment so this is referring to an empty object

function one(){
    let username = "aryan"
    // console.log(this)
    console.log(this.username); // undefined
}
one()

// arrow function
const two = () => {
    let username = "aryan"
    console.log(this); // {}
}
two()

// implicit return - we dont have to write return
const addTwo = (num1, num2) => (num1 + num2) // we can or cannot use (), but never in {}
console.log(addTwo(2, 3))
