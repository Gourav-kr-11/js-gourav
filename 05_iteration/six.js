const coding = ["js","ruby","java","python","cpp"]

// const value = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(value); //it will not work

const myNums=[1,2,3,4,5,6,7,8,9]

//filter
// const newNums = myNums.filter((num) => {
//     return num>4
// })

//foreach
// const newNums = []

// myNums.forEach((num) => {
//     if (num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)


const books = [
    {
        title: "The Alchemist",
        genre: "Fiction",
        publish: 1988
    },
    {
        title: "Atomic Habits",
        genre: "Self-help",
        publish: 2018
    },
    {
        title: "Rich Dad Poor Dad",
        genre: "Finance",
        publish: 1997
    }
];

//const userBooks =books.filter((bk)=>bk.genre === 'Finance')
const userBooks =books.filter((bk)=>{
    return bk.publish >2000 && bk.genre ==='Self-help'
}) //if we open scope{} then we have to use return keyword

console.log(userBooks);
 