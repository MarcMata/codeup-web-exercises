"use strict";

console.log("Hello from external JavaScript")

alert("Welcome to my website!");

let userInput = prompt('What is your favorite color?');
alert(`Great, ${userInput} is my favorite color too!!!`)
console.log(`Great, ${userInput} is my favorite color too!!!`);

let pricePerDay = 3;
let littleMermaid = (prompt(`How many days did you rent the little mermaid?`));
alert(`You rented little mermaid for ${littleMermaid} days.`)
let brotherBear = prompt(`How many days did you rent the Brother Bear?`);
alert(`You rented Brother Bear for ${brotherBear} days.`)
let hercules = prompt(`How many days did you rent the Hercules?`);
alert(`You rented Herculues for ${hercules} days.`)
let totalDaysRented = parseFloat(littleMermaid) + parseFloat(brotherBear) + parseFloat(hercules);
let total = totalDaysRented * pricePerDay;

alert(`3.1. Total amount to pay per day is $${pricePerDay}. The total days rented is ${totalDaysRented} days. The total cost for the customer is $${total}`)
console.log(`3.1. Total amount to pay per day is $${pricePerDay}. The total days rented is ${totalDaysRented} days. The total cost for the customer is $${total}`)

let amazonPPH = 380;
let googlePPH = 400;
let facebookPPH = 350;

let amazonHours = prompt(`How many hours did you work for amazon?`);
alert(`You worked ${amazonHours} hours for amazon`);
let googleHours = prompt(`How many hours did you work for google?`);
alert(`You worked ${googleHours} hours for amazon`);
let facebookHours = prompt (`How many hours did you work for facebook?`);
alert(`You worked ${facebookHours} hours for amazon`);

let amazonPay = amazonPPH * parseFloat(amazonHours)
let googlePay = googlePPH * parseFloat(googleHours)
let facebookPay = facebookPPH * parseFloat(facebookHours)

let totalPay = amazonPay + googlePay + facebookPay

let confirmHours = confirm(`You worked ${amazonHours} hours for Amazon, ${googleHours} hours for Google, abd ${facebookHours} hours for facebook?
press OK if everything is correct, if not, press Cancel`)
console.log(`You worked ${amazonHours} hours for Amazon, ${googleHours} hours for Google, and ${facebookHours} hours for facebook?`)
alert(`3.2. The total payment is as follows: $${totalPay}`)
console.log(`3.2. The total payment is as follows: $${totalPay}`)

// // let fullClass = false
// // let noConflictingSchedule = false
//
// let enrollStudent = !fullClass && !noConflictingSchedule
// console.log(`when ${enrollStudent}, enroll the student, false, do not enroll`);
let scheduleConflicts = confirm(`Press OK if you have any schedule conflicts, press cancel if you do not.`);
let maxClassSize = prompt(`What is your max class size?`);
let currentClassSize = prompt(`What is your current class size?`);

let canEnroll = scheduleConflicts && parseFloat(currentClassSize) < parseFloat(maxClassSize)

alert(`3.3. The max class size is ${maxClassSize}, the current class size is ${currentClassSize}. Can you enroll the student? ${canEnroll}`);
console.log(`3.3. The max class size is ${maxClassSize}, the current class size is ${currentClassSize}. Can you enroll the student? ${canEnroll}`)

// let itemsBought = 3;
// let premiumPerson = true;
// let offerNotExpired = true;
// let regularPerson = itemsBought >= 2;
// let applyProductOffer = (regularPerson && offerNotExpired) && premiumPerson;
//
// console.log(applyProductOffer + `, if true, apply offer. If false, deny`);
let minCartSize = 2;
let cartSize = prompt(`How many items are in your cart?`);
let premiumMeber = confirm(`Are you a premium member?`);
let offerExpired = confirm(`Is your offer still valid?`);

let canOfferApply = (premiumMeber || (cartSize >= parseFloat(minCartSize)) && !offerExpired)

alert(`3.4. ${canOfferApply}: if true, your offer applies, if false, it does not`)
console.log(`3.4. ${canOfferApply}: if true, your offer applies, if false, it does not`)
