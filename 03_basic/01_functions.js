function sayMyName(){
console.log("G");
console.log("O");
console.log("U");
console.log("R");
console.log("A");
console.log("V");
}
//sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// const result =addTwoNumbers(5, 10);
// console.log(result);//undefined , because the function does not return anything, it only logs the sum to the console. If you want to get the result of the addition, you should return the sum from the function instead of just logging it. Here's how you can modify the function:


function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2; // This will return the sum of num1 and num2
}

const result = addTwoNumbers(5, 10);
//console.log(result); // This will now log 15, which is the sum of 5 and 10.

function loginUserMessage(username = "Guest"){
    //username= Guest is a default parameter, which means if the function is called without an argument, username will be "Guest".means it will not be undefined, it will be "Guest". So the function will return "Guest just logged in" if called without an argument. If you want to check for undefined, you can do it like this:
    //if(username===undefined)
    if(!username){
        console.log("Please provide a username");
        return
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessage("Gourav")); // This will log "Gourav just logged in" to the console.
//console.log(loginUserMessage());//Guest just logged in, because the function is called without an argument, so username is "Guest".   




// function calculateCartPrice(...num1){
//     return num1

// }
// console.log(calculateCartPrice(100, 200, 300, 400, 500)); // This will log [100, 200, 300, 400, 500] to the console. The ...num1 is a rest parameter, which means it will take all the arguments passed to the function and put them into an array called num1. So in this case, num1 will be [100, 200, 300, 400, 500].




function calculateCartPrice(val1, val2, ...num1){
    return num1

}
//console.log(calculateCartPrice(100, 200, 400, 500));//it will log [400, 500] to the console. The first two arguments (100 and 200) are assigned to val1 and val2 respectively, and the rest of the arguments (400 and 500) are collected into the array num1. So in this case, num1 will be [400, 500].


const user = {
    username:"Gourav",
    age:22
}

function handleObj(anyuser){
    console.log(`Username is ${anyuser.username} and age is ${anyuser.age}`)
}

//handleObj(user)
handleObj({
    username:"sam",
    age:22
})

const myNewArray =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))