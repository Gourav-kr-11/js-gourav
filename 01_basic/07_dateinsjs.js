// import { Temporal } from '@js-temporal/polyfill';

// console.log(Temporal.Now.instant());


// Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

let myCreatedDate = new Date('2026-12-12')
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2026 ,12,11,11,30)
// console.log(myCreatedDate1.toLocaleString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(myTimestamp/1000)); // seconds

let newDate = new Date()
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

newDate.toLocaleString('default',{
    weekday: "long",
    //timeZone:''
})