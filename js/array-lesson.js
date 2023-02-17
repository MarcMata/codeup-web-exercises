"use strict";

let fruits = [`bananas`, `apples`, `oranges`, `mangoes`, `tomatoes`];
let var1 = fruits[0];
// console.log(var1);

/*---------Length of Arrays---------*/
let numberOfFruits = fruits.length;
    //console.log(`The number of fruits is ${numberOfFruits}`);

/*---------use of toString function---------*/
let fruitsString = fruits.toString();
    console.log(`Using toString() on fruits => ${fruitsString}`);
/*---------Mix of data types---------*/
let fruitsAndNumbers = [`bananas`,2, `apples`, 8699889, `oranges`, undefined, null, NaN]
    console.log(fruitsAndNumbers);
const returnString = (input) => {
    return input;
}

let stringList = [returnString(`Marc`), returnString(`Marc`), returnString(`Marc`)];
console.log(stringList);

/*---------Looping in arrays---------*/

for (let i = 0; i < fruits.length; i++){
    let fruit = fruits[i];
    console.log(fruit);
}

//forEach loop
fruits.forEach(function(element, index, array){
    console.log(`The element follows: ${element}`);
    console.log(`The index follows: ${index}`);
    console.log(`The array follows: ${array}`);
});

/*----------example forEach loop with an arrow function----------*/
fruits.forEach((fruit,index,array)=>{
    console.log(`The element follows: ${fruit}`);
    console.log(`The index follows: ${index}`);
    console.log(`The array follows: ${array}`);
});

let studentSeating = [
    [`Cynthia`,`Marc`,`Yamba`,`Kevlyn`,`Nick`,`Jared`],
    [`Sarah`,`Joe`,`Matthew`,`Randy`,`Quintyn`,`Kaeden`,`Damian`],

]

studentSeating.forEach((row)=>{
    row.forEach((student)=>{
        console.log(student)
    });
});
/*-------------------------------*/
let daysOfTheWeek = [`Monday`,`Tuesday`,`Wednesday`,`Thursday`];
console.log(daysOfTheWeek)

daysOfTheWeek.unshift(`Sunday`);
console.log(daysOfTheWeek);

daysOfTheWeek.push(`Friday`, `Saturday`);

console.log(daysOfTheWeek);

let todoList = [`Take out the trash`,`Clean the car`,`Pay the bills`];

console.log(`My todo list:`);
console.log(todoList);

console.log(`Completing the last item: ${todoList[todoList.length-1]}`);

let removedItem = todoList.pop();

console.log(`Task complete: ${removedItem}`);

console.log(todoList)

console.log(`completing the first item: ${todoList[0]}`);

let doneItem = todoList.shift();

console.log(`Task complete: ${doneItem}`);


console.log(todoList);

