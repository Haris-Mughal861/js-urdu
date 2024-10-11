// singleton

const JsUser = {
    name: "harismughal",
    age: 21,
    location: "Quetta",
    email: "harismughal861@gmail.com",
    isLoggedIn: false,
    lastLogedinDays: ["Monday", "Saturday"],
}

console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser.age);


JsUser.email = "ajhfgisdfsk"
//Object.freeze(JsUser)
console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hellow Js user, ${this.name}');
}
console.log(JsUser.greeting());


const tinderUser = new Object()

tinderUser.id = "123456"

tinderUser.name = "Haris"

tinderUser.isLoggedIn = false

console.log(tinderUser);

const ragularUser ={
    email: "harismughal@123",
    fullname:{
        userfullname:{
            firstname: "muhammad",
            lastname: "haris",

        }
    }
}
console.log(ragularUser.fullname.firstname);


const obj1 = {1: "asd", 2: "b"}

const obj2 = {3: "erty", 4: "bv"}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3);


