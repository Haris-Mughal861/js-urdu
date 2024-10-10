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



