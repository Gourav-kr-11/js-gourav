// const tinderUser = new Object(); // object literal syntax or singleton

const tinderUser ={}
tinderUser.id = "123abc";
tinderUser.name = "Gourav";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "some@example.com",
    fullname: { 
        userFullName: {
            firstName: "Gourav",
            lastName: "Kumar"
        }
    }
}

//console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

//const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);

const user = {id: 1, name: "Gourav", age: 20};

//user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(user.hasOwnProperty("name"));