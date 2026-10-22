const user = {
   username : "Gourav Kumar",
   age : 22,

   welcomeMessage : function(){
         console.log(`${this.username}, welcome to website`); // this is used to access current context(variable in scope)
         //console.log(this)
   }
}

// user.welcomeMessage()
// user.username = "Sher"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "gourav"
//     console.log(this.username) //undefined, because we cannot use this in function
// }

// chai()



const sher = () =>{
    let username ="sher"
    console.log(this)
}
//sher()

// const addTwo =(num1,num2)=>{
//     return num1+num2
// }


//const addTwo =(num1,num2)=> num1+num2
// const addTwo =(num1,num2)=> (num1+num2)
const addTwo =(num1,num2)=> ({username:"gourav"})

console.log(addTwo(5,6))
