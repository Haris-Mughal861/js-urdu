//Arrays


let myArr = [1,2,3,4,5]
console.log(typeof myArr);

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[0]);

//array Methods

myArr.push(7,4,5,6,7)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);


myArr.shift(7)
console.log(myArr);

console.log(myArr.includes(0));

console.log(myArr.indexOf(18));

console.log(myArr.indexOf(7));


console.log("A, myArr");

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("b", myArr);

// refrence (Premitive)

const score = 100
const scoreValue = 100.9

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 123456789123456789n

console.log(id===anotherId);



console.log("Harismughal");


// Refrence (Non Premitives)

const names = ["haris", "Mughal", "Shahid"]
let myObj = {
    name: "Haris",
    age : 21,
}

const myFuction = function(){
    console.log("Hello World");
    
}
console.log(myFuction);




//Stack(primitive) and Heap(non Primitive)

let myName = "Haris" //Stack

let anotherName = myName
anotherName = "Mughal"
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    password: "user@bl"
}
let userTwo = userOne
userTwo.email = "Harismughal@123"

console.log(userOne.email);
console.log(userTwo.email);







