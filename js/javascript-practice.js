/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

const convertAddressToObject = (address) => {
    let indexOfAddress = address.indexOf(" ")
    let addressArr = address.split(indexOfAddress);
    let streetNumber = addressArr[0];
    let streetName = addressArr[1];
    console.log(`streetNumber: ${streetNumber} streetName:${streetName}`)
}
//
// function convertAddressToObject2() {
//     const indexOfSpace = addres.indexOf(" ");
//     const streetNumber = address.substring(0, indexOfSpace);
//     const streetName = address.substring(indexedOfSpace + 1)
// }
//
// function convertAddressToObject(address) {
//     return {
//         streetNumber: address.substring(0,address.indexOf(" ")),
//         streetName: address.substring(address.indexOf(" " ))
//     }
// }

/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples

 // * >> totalPets([
 // *       {name: 'Fernando Mendoza', pets: 1},
 // *       {name: 'Douglas Hirsh', pets: 8},
 // *       {name: 'Kenneth Howell', pets: 2}
 // *    ]) ➞ 11
 // */

const people = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
];

// function totalPets(personsArray) {
//     let total = 0
//     for (let i = 0; i < personsArray.length; i++){
//         total += personsArray[i].pets
//     }
//     return total;
// }

function totalPets(personsArray) {
    let total = 0;
    personsArray.forEach(person => {
        total += person.pets;
    })
    return total;
}

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

// function minMax([minMaxArr]) {
//     let largestNum = 0
//     let smallestNum = 0
//     for(let i = 0; i <=minMaxArr.length; i++){
//         if (minMaxArr[i] > largestNum){
//             largestNum = minMaxArr[i];
//         }
//         console.log(largestNum);
//     }
//     for(let i = 0; i <= minMaxArr.length; i++){
//         if (minMaxArr[i] < smallestNum){
//             smallestNum = minMaxArr[i]
//         }
//         console.log(smallestNum);
//     }
//     return `Largest Number:${largestNum}, Smallest Number ${smallestNum}`
// }

function minMax(minMaxArr){
    const minNum = Math.min(...minMaxArr)
    const maxNum = Math.max(...minMaxArr)
    return `Largest Number:${maxNum}, Smallest Number ${minNum}`;
}

// /**
//  * Drink Sorting
//  * You will be given an array of drinks, with each drink being an object with two properties: name and price.
//  * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
//  *
//  * Assume that the following array of drink objects needs to be sorted:
 let drinks = [
     {name: "lemonade", price: 50},
     {name: "lime", price: 10}
 ]

function sortDrinkByPrice(drinksArr){
    drinksArr.sort(function(a,b) {
        return parseFloat(a.price) - parseFloat(b.price);
    })
    return drinksArr
}


 // * Examples
 // * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 // */

/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */