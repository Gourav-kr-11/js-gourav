const myObj ={
    js : 'javaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift: 'swift by obj'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js","cpp"]

for (const key in programming) {
   
    console.log(programming[key]);
    
}