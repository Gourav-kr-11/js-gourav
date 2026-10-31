const code = [1,2,3,4,5]


// code.forEach( function (item){
//     console.log(item)} 
// )


// code.forEach( (val) => {
//     console.log(val);
    
// } )


// function printMe(item){
//    console.log(item)
// }
// code.forEach(printMe)


// code.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding  = [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    }
]

myCoding.forEach((val) => {
    console.log(val.languageName, ":-", val.languageFileName)
})

