"use strict";

let promptUser = parseInt(prompt(`Please enter an odd number between 1 and 50`));

while (promptUser % 2 === 0){
    promptUser = parseInt(prompt(`You entered an even number, enter an odd number between 1 and 50`));

}
console.log(`Number to skip is ${promptUser}`);
//if user enters the wrong number break
//Even number// gets you an even number :number % 2 === 0) {

for (let i = 1; i < 50; i += 2) {
    if (i === promptUser) {
        console.log(`Yikes! Skipping number: ${i}`);
        continue;
    }
    console.log(`Here is an odd number: ${i}`);
}
//     console.log(`Yikes! Skipping number: ${Odd number}`)
//

