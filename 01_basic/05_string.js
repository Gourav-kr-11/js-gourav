// const name ="Gourav"
// const repoCount = 10
// console.log(name +" "+ repoCount) // Gourav10

// console.log(`My name is ${name} and I have ${repoCount} repos`) // My name is Gourav and I have 10 repos


// const gameName = new String("GTA") // String object
// console.log(gameName) // [String: 'GTA']
// console.log(gameName[0]) // G
// console.log(gameName.__proto__) // String {constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, bold: ƒ, …}
// console.log(gameName.length) // 3
// console.log(gameName.toUpperCase()) // GTA
// console.log(gameName.charAt(2)) // A
// console.log(gameName.indexOf("T")) // 1

// const myName = "Gourav"
// const newString = myName.substring(0, 4) // Gour
// console.log(newString) // Gour

// const myName2 = "Gourav"
// const newString2 = myName2.slice(-8, 4) // Gour
// console.log(newString2) // Gour

// const newStringOne = "      gourav     "
// console.log(newStringOne) //       gourav
// console.log(newStringOne.trim()) // gourav
// console.log(newStringOne.trimStart()) // gourav
// console.log(newStringOne.trimEnd()) // gourav

const url = "https://gourav.com/gourav%20choubey"

url.replace("%20", "-") // https://gourav.com/gourav-choubey

console.log(url.includes("gourav")) // true

console.log(url.split("/")) // ['https:', '', 'gourav.com', 'gourav%20choubey']

