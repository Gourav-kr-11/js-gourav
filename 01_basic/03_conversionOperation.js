let score = 33

console.log(typeof score);

let score2 = "33abc"

console.log(typeof score2);

let valueInNumber = Number(score2) //explicit conversion
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score3=null; //converting null to number will give 0
let valueInNumber2 = Number(score3);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score4 = undefined; //converting undefined to number will give NaN
let valueInNumber3 = Number(score4);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score5 = true; //converting boolean to number will give 1 for true and 0 for false
let valueInNumber4 = Number(score5);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

let score6 = false;
let valueInNumber5 = Number(score6);
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

//"33"=>33
//"33abc"=>NaN
//null=>0
//undefined=>NaN
//true=>1
//false=>0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn); //explicit conversion
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

let isLoggedIn2 = 0;//""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(typeof booleanIsLoggedIn2);
console.log(booleanIsLoggedIn2);

//1=>true
//0=>false
//""=>false
//"Gourav"=>true
//null=>false
//undefined=>false
//NaN=>false

let someNumber = 33;
let stringNumber = String(someNumber); //explicit conversion
console.log(typeof stringNumber);
console.log(stringNumber);

//33=>"33"


