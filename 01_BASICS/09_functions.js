function calc(val1, val2, ...num){
    console.log(val1, val2, num);
}
// calc(200, 300, 400, 500, 600)


//passing object in function
const user = {
    name: "aryan",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
handleObject(user)

//passing array in function
const myNewArray = [200, 400, 600, 800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
