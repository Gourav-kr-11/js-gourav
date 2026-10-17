//var c=300
let a =300
if(true){
    let a =10
    const b = 20
    //console.log("Inner: ", a)
    
}

//console.log(a)
// console.log(b)
//this two will not be printed outside scope , but var can be printed
//console.log(c)

function one(){
    const username="Gourav"

    function two(){
       const website="gourav.com"
       // console.log(username);//this will execute, because username is global varible for it
    }
    //console.log(website) // this will not execute because this is outside the scope

    two()
}
one()

if(true){
    const username ="Gourav"
    if(username==="Gourav"){
        const website = " Youtube"
        //console.log(username+ website)

    }
    //console.log(website)//error
}
//console.log(username)//error


// ++++++++++++Intresting+++++++++++++//

addOne(5)//it will give output
function addOne(num){
    return num+1
}


addTwo(5) // it will give error 
const addTwo = function(num){
    return num +2
}
