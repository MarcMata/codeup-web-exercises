"use strict";

/*UTILS should always run first inside an HTML file*/
/*paste the following
<script src = "js/utils.js"></script>
 */
const isEvenOdd = (number) => {
    if(number % 2 === 0) {
        return "The number is even";
    } else {
        return `The number is odd`;
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