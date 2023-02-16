"use strict";

let i = 2;

while (i <= 65536){
    console.log(i);
    i *= 2;
}

//creating a number multiplying itself

//do while loop

let totalCones = randomNumber(50,100);

do {
    let conesToSell = randomNumber(1, 5);
    if (conesToSell <= totalCones) {
        totalCones -= conesToSell;
        console.log(conesToSell + ` cones sold!`);
    } else {
        console.log(`Cannot sell ${conesToSell} cones. Only ${totalCones} left.`);
    }
} while (totalCones > 0) ;

console.log(`All cones have been sold!`);