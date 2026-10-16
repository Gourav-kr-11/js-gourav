//singleton

//object literals
const mySym = Symbol("key1");

const JsUser ={
    name: "Gourav",
    "full name": "Gourav Kumar",
    [mySym]: "value of symbol",
    age: 22,
    location: "India",
    email: "gourav@example.com",
    isLoggedIn: true,
    LastLogin: "2024-06-01",
    lastLoginDays:["Monday", "Tuesday", "Wednesday"]
}

// console.log(JsUser.name);//we cannot access the property with space in it using dot notation, we have to use bracket notation
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);//we can access the property with space in it using bracket notation
// console.log(JsUser[mySym]);//we can access the property with symbol using bracket notation

JsUser.email = "gourav@newemail.com";
//Object.freeze(JsUser);//we cannot change the properties of the object after freezing it
JsUser.email = "gourav@updatedemail.com"; //this will not change the email as the object is frozen
//console.log(JsUser.email);//this will print the old email as the object is frozen

JsUser.greeting = function(){
   console.log("Hello there!");
}

JsUser.greeting2 = function(){
   console.log(`Hello ${this.name} Welcome to the JavaScript World!`);
}
console.log(JsUser.greeting());//this will print the greeting message
// console.log(JsUser.greeting);//this will print the function definition

console.log(JsUser.greeting2());//this will print the greeting message with the name of the user
