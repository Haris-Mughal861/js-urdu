let someNumber = 46
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

let value = 3
let negvalue = -value
//console.log(negvalue);

let str1 = "Haris"
let str2 = "Mughal"
console.log(str1 + str2);
console.log("1" + 2 + 5 );
console.log(1 + "2");
console.log(1+2+3+"4");

console.log("5" > 3);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined == 0);

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

