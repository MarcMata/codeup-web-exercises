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


 // * Get Sum of People's Budget
 // * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 //
 // Examples
 //

const peopleAndBudgets = [
    {name: "John", age:21, budget: 23000 },
    {name: "Steve", age:32, budget: 40000},
    {name: "Martin", age: 16, budget: 2700}
]

function getBudgets(arrayOfObjects){
    let totalBudget = 0
    arrayOfObjects.forEach(object => totalBudget += object.budget);
    return totalBudget;
}
/*-----practice 6 March, 2023--*/

const cities = [
    {
        name: "New York City",
        state: "New York",
        population: 8336817
    },
    {
        name: "Los Angeles",
        state: "California",
        population: 3979576
    },
    {
        name: "Chicago",
        state: "Illinois",
        population: 2693976
    },
    {
        name: "Houston",
        state: "Texas",
        population: 2320268
    },
    {
        name: "Phoenix",
        state: "Arizona",
        population: 1680992
    },
    {
        name: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064
    },
    {
        name: "San Antonio",
        state: "Texas",
        population: 1547253
    },
    {
        name: "San Diego",
        state: "California",
        population: 1423851
    },
    {
        name: "Dallas",
        state: "Texas",
        population: 1343573
    },
    {
        name: "San Jose",
        state: "California",
        population: 1030119
    },
    {
        name: "Austin",
        state: "Texas",
        population: 964254
    },
    {
        name: "Jacksonville",
        state: "Florida",
        population: 903889
    },
    {
        name: "Fort Worth",
        state: "Texas",
        population: 895008
    },
    {
        name: "Columbus",
        state: "Ohio",
        population: 892533
    },
    {
        name: "San Francisco",
        state: "California",
        population: 883305
    },
    {
        name: "Charlotte",
        state: "North Carolina",
        population: 885708
    },
    {
        name: "Indianapolis",
        state: "Indiana",
        population: 876384
    },
    {
        name: "Seattle",
        state: "Washington",
        population: 753675
    },
    {
        name: "Denver",
        state: "Colorado",
        population: 727211
    },
    {
        name: "Washington",
        state: "District of Columbia",
        population: 702455
    }
];

// Make sure you are comfortable with these techniques: looping over the array, console-logging the name of each city.
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i].name);
// }

// cities.forEach(function (cities){
//     let citiesNames = cities.name;
//     console.log(citiesNames)
// })
for (let i = 0; i < cities.length; i++) {
    if (cities[i].state === "Texas" && cities[i].population > 1000000) {
        console.log(`${cities[i].name}, ${cities[i].state}`);
    }
}

const fortWorth = {
    name: "Fort Worth",
    state: "Texas",
    population: 895008
}

function isInTexas(cityObject){
    if (cityObject.state === "Texas"){
        return true;
    }
        return false;
}

function isInTexas(cityObjet){
    return cityObject.state === "Texas;"
}

console.log(cities[3].name + " population: " + cities[3].population)

// Then try console-logging the name and state.
// cities.forEach(function (cities ){
//     let citiesNames = cities.name;
//     let states = cities.state;
//     console.log(`${citiesNames}, ${states}`)
// })
// Then try console-logging all the cities in Texas with populations over 1 million.
// cities.forEach(function (cities) {;
//     let population = cities.population;
//     if (cities.state === Texas) {
//         console.log(cities)
//     }
// })
// Write a function that accepts one city object and returns true if the city is in Texas.
// Write a function that accepts an array of city objects and the name of a state and returns an array with only the cities in that state.


/**
 * Hashes and Pluses
 * Create a function named hashPlusCount that returns the number of hashes and pluses in a string.
 *
 * Examples
 *
 * hashPlusCount("###+") ➞ [3, 1]
 * hashPlusCount("##+++#") ➞ [3, 3]
 * hashPlusCount("#+++#+#++#") ➞ [4, 6]
 * hashPlusCount("") ➞ [0, 0]
 *
 * Notes
 * Return [0, 0] for an empty string.
 * Return in the order of [hashes, pluses].
 */

/**
 * TODO:
 * Write a function named reverseOdd that will take a string as argument, reverse all the words which have odd length. The even length words are not changed.
 *
 * Examples
 *
 * >> reverseOdd("Bananas") ➞ "sananaB"
 * >> reverseOdd("One two three four") ➞ "enO owt eerht four"
 * >> reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"
 *
 * Notes
 * There is exactly one space between each word and no punctuation is used.
 * Should work with empty string.
 * Should work with only one word.
 */