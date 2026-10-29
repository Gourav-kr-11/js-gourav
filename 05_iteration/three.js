// // [{},{},{}]

// const arr = [1,2,3,4,5]

// // for (const element of object) {
    
// // }

// for (const val of arr) {
//     console.log(val);
// }

// const greeting = "Hello world!"

// for (const greet of greeting) {
//     console.log(greet)
    
// }
 

// Maps

const map = new Map()
map.set('in','India')
map.set('fr','france')

//console.log(map);

for (const [key, value] of map) {
    console.log(key , ':-', value)
}


//in case of object
const myObj = {
    'game1' : 'nfs', 
    'game2' :'gta'
}

for (const [key, value] of myObj) {
    console.log(key, ':-', value)
} //it will give errror
