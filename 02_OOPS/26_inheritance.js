class User {
    constructor(username){
        this.username = username
    }
}

class Student extends User{
    constructor(username, age){
        super(username)
        this.age = age
    }

    addCourse(){
        console.log(`new course: ${this.username}`);
        
    }
}
const userOne = new Student("aryan", 20)
userOne.addCourse()
console.log(userOne instanceof User);
console.log(userOne instanceof Student);


