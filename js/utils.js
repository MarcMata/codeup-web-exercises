"use strict";

/*UTILS should always run first inside an HTML file*/
/*paste the following
<script src = "js/utils.js"></script>
 */
const isEvenOdd = (number) => {
    if(number % 2 === 0) {
        return "is even";
    } else {
        return `is odd`;
    }
}

const isPositiveNegative = (number) => {
    if(number > 0) {
        return `The number entered was positive`;
    } else {
        return `the number entered was negative`;
    }
}

const formatAsUSCurrency = (number) => {
    return parseFloat(number).toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function formatToLocaleString(number, language, country, currency){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

const isNumericAndNotNaN = (input) => {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean";
}

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

// You can use the Math.random() method to generate a random decimal number between 0 and 1, and then multiply
// it by the range of the numbers you want (i.e. 200 - 20 = 180)
// and add the minimum number you want (i.e. 20) to shift the range to the desired one.
// Here is an example code snippet that generates a random number between 20 and 200 (inclusive) using this method:
//     javascript
// Copy code
// const randomNumber = Math.floor(Math.random() * 181) + 20;
// console.log(randomNumber);
// In this example, Math.random() generates a random decimal number between 0 and 1. When you multiply this by 181,
// you get a random decimal number between 0 and 181. When you add 20 to this,
// you get a random number between 20 and 200. The Math.floor() function is used to round down the result to an integer.

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// - Make a function named `isBlank(input)` that determines if a given input is
// spaces, newline characters, or tabs.
const isBlank = (input) => {
    return input.trim() === "";
}

// - Make a function named `trim(string)` that removes empty spaces before and
// after the input.
const trim = (string) => {
    return input.trim();
}

function fastestIsPalindrome(str) {
    let len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}