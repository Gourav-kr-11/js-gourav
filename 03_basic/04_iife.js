//Immediately Invoked Function Expressions (IIFE)   [(()=>{})() or ((){})()]
(function sher(){
    //name iife
    console.log(`DB CONNECTED`)
})(); // IIFE used when we need our code to immedetiety executed and saved from global variable pollution

//semicolon needed after iife
((name) =>{
    console.log(`DB CONNECTED ${name}`)
})('gourav')
