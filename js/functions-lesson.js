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
/*--------------------------------------------------------------------------------------------------*/
// function negativize(input) {
//     if (input > 0) {
//         return -input;
//     } else if (input <= 0) {
//         return input
//     } else if (typeof input === "string") {
//         return `negative` + input;
//     }
// }

// function negativize(input){
//     if (typeof input === "string" || isNaN(parseFloat(input))){
//         return "that is not a number!";
//         }  else if (input > 0) {
//         return -input;
//     } else {
//         return input;
//     }
// }

// function negativize(input) {
//     if (isNan(parseFloat(input))) {
//         return "that is not a number!";
//     } else if (input > 0) {
//         return -input
//     } else {
//         return input;
//     }
// }

// console.log(negativize(532))

// const reverse = (str) => {
//     let words = str.split(``);
//     console.log(words);
//     let charsReversed = words.reverse();
//     console.log(charsReversed);
//     return charsReversed.join(``);
// }
//shortcut
// const reverse = (str) => {
//     return str.split(``).reverse().join(``);
// }
// console.log(reverse(`gnisrever nuf toofgib`));

// //functions practice
// const returnTwo = () => {
//     return 2
// }
//
// console.log(returnTwo())
//
// const sayHowdy = () => {
//     return `Howdy!`;
// }
//
// console.log(sayHowdy());
//
// const returnName = () => {
//     return `Marc!!!!!`;
// }
//
// console.log(returnName())
//
// const addThree = (number) => {
//     return number + 3
// }
//
// console.log(addThree(5))
//
// const sayString = (inputString) => {
//     return `${inputString}`;
// }
//
// console.log(sayString(`codeup`))
//
// const lowerCase = (string) => {
//     let toLowerCase = string;
//     return toLowerCase.toLowerCase()
// }
//
//
// console.log(lowerCase(`NOOOOOOOOOOOO`));
//
// const  double = (n) => {
//     let doubleN = n * 2
//     return doubleN
// }
//
// console.log(double(23));
//
// const triple = (n) => {
//     let tripleN = n * 3
//     return tripleN
// }
//
// console.log(triple(23));
//
// const quadruple = (n) => {
//     let quadrupleN = n * 4;
//     return quadrupleN
// }
//
// console.log(quadruple(23));
//
// const half = (n) => {
//     let halfN = n / 2;
//     return halfN
// }
//
// console.log(half(23))
//
// const subtract = (a,b) => {
//     let subtractAB = a - b
//     return subtractAB
// }
//
// console.log(subtract(5,4))

// const timeOfTheYear = (Month) => {
//     let monthsOfTheYear = [January, February, March, April, May, June, July, August, September, October, November, December]
//     if spring = 1, 2, 3
// }
