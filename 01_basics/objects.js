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

const obj3 = {5: "tyui", 6: "yui" }

//const obj4 = Object.assign(obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

const users = [
    {
        id: 1,
        email: "harismughal861@gmail.com"
    },
    {
        name: "haris"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price:  "999",
    courseInstructor:"hitesh"
}

const {courseInstructor: instructor}= course

//console.log(courseInstructor);
console.log(instructor);

console.log(course);

const navbar = ({company}) => {

}
navbar(): void
navbar(company = "Haris")


//{
  //  name= "haris",
  //  coursename= "js",
  //  price = "free"
//}







