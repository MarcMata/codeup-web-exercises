"use strict";

// //traditional method
// function helloWorld() {
//     alert(`Hello World!`)
// }


// the arrow function
// const helloWorld = (name) => {
//     let message = `Hello, ${name}`
//     return message;
// }
// let firstHello = helloWorld(`Jason`);
// console.log(firstHello);
// let secondHello = helloWorld(`Javier`);
// console.log(secondHello);
// let thirdHello = helloWorld(`Yamba`);
// console.log(thirdHello);

// const parseDiscordName = (name) => {
//     let guildCharEnd = name.indexOf(']') + 1;
//     let guildName = name.substring(0,guildCharEnd);
//     let userName = name.substring(guildCharEnd);
//     let message = `The user's name is ${userName}.
// And they are a member of the ${guildName} guild.`
//     let nameArray = [guildName, userName];
//     return nameArray;
// }
//
// let discordName = parseDiscordName("[YoLoBlob]Marc");
// console.log(discordName);
//
// let discordName2 = parseDiscordName("[EatFresh]Subway");
// console.log(discordName2);
// Arrow function 1
// const highFive = (name1, name2) => {
//     return `${name1} gives ${name2} a high five`;
// }

// // Arrow function 2
// const highFive = (name1, name2) => {
//     return `${name1} gives ${name2} a high five`;
// }
// Arrow function 3
// const highFive = (name1, name2) => `${name1} gives ${name2} a high five`;
//
//
// let names1 = highFive(`Jason`, `Javier`);
// console.log(names1);


//create an arrow function isEven(num) that takes an integer as an argument
//it returns true if the integer is even and false if not
// const isEven = (num) => {
//     let result = num % 2 === 0;
//     return result
// }
//
// let students = 24;
// let evenStudents = isEven(students);
//
// console.log(evenStudents);

//IIFE (Immediately-Invoked Function Expression) arrow function
//Arrow syntax
// (() => {
// is
//
// })();
//standard function
// (function(){
//
// })();