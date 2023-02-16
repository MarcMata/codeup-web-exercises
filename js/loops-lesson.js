"use strict";
//
// let i = 1;
// while (i <= 10) {
//     console.log(`Loop #${i}`);
//     i++;
// }
//
// //even numbers only
// while (i <= 10) {
//     if (i % 2 === 0){
//         console.log(`Loop #${i}`);
//     }
//     i++;
// }
//Do while!!!!!!!!
// do {
//     console.log(`Loop #${i}`);
//     i++;
// } while (i <= 10)

//FOR LOOP initialization; condition; increment
// for (let i = 1; i <= 10; i++) {
//     console.log(`FOR LOOP #${i}`)
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i + 1);
// }

// const getFactorial = (num) => {
//     let result = num;
//     for (let i = (num-1); i > 0; i--){
//         result *= 1;
//     }
//     console.log(result)
//     return result;
// }
//
// getFactorial(5);

//how to loop within a loop
const buildPyramid = (rows) => {
    //loop through rows
    for (let i = 1; i <= rows; i++){
        let row = "";
        for (let j = 1; j <= rows -i; j++) {
            row+="  ";
        }
        //loop to add the asterisks
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "* ";
        }
        console.log(row);
    }
}

buildPyramid(5);

