//Primitive 

// 7 types of primitive data types in JavaScript
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol

// const score = 100; // Number
// const scoreValue = 100.5; // Number
// const isLoggedIn = false; // Boolean
// const outsideTemp = null; // Null
// let userEmail; // Undefined
// const id = Symbol("123"); // Symbol
// const anotherId = Symbol("123"); // Symbol
// console.log(id === anotherId); // false
// const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// Non-Primitive or reference data types in JavaScript

// 1. Object 
// 2. Array
// 3. Function

// const heroes = ["ironman","spiderman","thor"];

// const myObj ={
//     name: "Bruce",
//     age: 30,
//     isAvenger: true
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

////////////////////////////////////////////////////////////////////////////

// Stack (Primitive), Heap (Non-Primitive)
// let myName = "Bruce"; // Primitive
// let anotherName = myName; // Copying the value of myName to anotherName

// console.log({myName, anotherName}); // {myName: "Bruce", anotherName: "Bruce"}

// myName = "Tony"; // Changing the value of myName

// console.log({myName, anotherName}); // {myName: "Tony", anotherName: "Bruce"}


// let myHero = {
//     name: "Steve",
//     age: 30
// } // Non-Primitive

// let anotherHero = myHero; // Copying the reference of myHero to anotherHero

// console.log({myHero, anotherHero}); // {myHero: {name: "Steve", age: 30}, anotherHero: {name: "Steve", age: 30}}

// myHero.age = 31; // Changing the age property of myHero

// console.log({myHero, anotherHero}); // {myHero: {name: "Steve", age: 31}, anotherHero: {name: "Steve", age: 31}}

// // when we change the value of a primitive data type, it creates a new copy of that value in memory. 
// // However, when we change the value of a non-primitive data type, it modifies the original object in memory, 
// // and all references to that object will reflect the change.