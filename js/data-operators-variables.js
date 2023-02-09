// let a = 1;
// let b = a++;
// let c = ++a;
// // a = 3, b = 1, c = 3
//
// let d = "hello";
// let e = false;
//
// d++;
// e++;
//
// d = NaN, e = 1
//
// let perplexed; // perplexed is undefined (no value is assigned)
// console.log(perplexed + 2);
// NaN
//
// let price = 2.7;
// console.log(price.toFixed(2))
// '2.70'
//
// // let price = "2.7";
// // console.log(price.toFixed(2));
// // Error?
//
// console.log(isNaN(0))
// //false
//
// console.log(isNaN(1))
// // false
//
// console.log(isNaN(""))
//false
//
// console.log(isNaN("string"))
// //true
//
// console.log(isNaN("0"))
// //false
//
// console.log(isNaN("1"))
// //false
//
// console.log(isNaN("3.145"))
// //false
//
// console.log(isNaN(Number.MAX_VALUE))
// //false
//
// console.log(isNaN(Infinity))
// //false
//
// console.log(isNaN("true"))
// //true
//
// console.log(isNaN(true))
// //false
//
// console.log(isNaN("false"))
// //true
//
// console.log(isNaN(false))
// //false
//
// //to illustrate why the isNaN() function is needed:
// console.log(NaN == NaN) //false it's needed to confirm if something is not a number
//
// console.log(!true); //false
//
// console.log(!false); //true
//
// console.log(!!true); //true
//
// console.log(!!false); //false
//
// console.log(!!0); //false
//
// console.log(!!-0); //false
//
// console.log(!!1); // true
//
// console.log(!!-1); //true
//
// console.log(!!0.1); //true
//
// console.log(!!"hello"); //true
//
// console.log(!!""); //false
//
// console.log(!!''); //false
//
// console.log(!!"false"); //true
//
// console.log(!!"0"); //true
//
// let sample = "Hello Codeup";
//  sampleLength = `The sample length is ${sample.length}`
// console.log(sampleLength) //The sample length is 12
//
// let sampleUppercase = `This is the sample all upercase: ${sample.toUpperCase()}`
// console.log(sampleUppercase); // This is the sample all upercase: HELLO CODEUP
//
// let sampleConc = sample + " Students";
// console.log(sampleConc); //Hello Codeup Students
//
// let sampleReplace = sampleConc.replace(" Students", " Class");
// console.log(sampleReplace); //Hello Codeup Class
//
// console.log(sampleReplace.indexOf(`c`)); //-1 as a number because it didn't find it
//
// console.log(sampleReplace.indexOf(`C`)); //6 as a number
//
// let codeupChar = sampleReplace.indexOf(`C`);
//  let onlyCodeup = sampleReplace.substring(codeupChar,12);
// console.log(onlyCodeup) //Codeup
//
// let pricePerDay = 3;
// let littleMermaid = 3 * pricePerDay;
// let brotherBear = 5 * pricePerDay;
// let hercules = 1 * pricePerDay;
// let total = littleMermaid + brotherBear + hercules;
//
// console.log(`Total amount to pay: $` + total);
//
// let amazonPPH = 400;
// let googlePPH = 380;
// let facebookPPH = 350;
//
// let amazonHours = 4
// let googleHours = 6
// let facebookHours = 10
//
// let amazonPay = amazonPPH * amazonHours
// let googlePay = googlePPH * googleHours
// let facebookPay = facebookPPH * facebookHours
//
// let totalPay = amazonPay + googlePay + facebookPay
//
// console.log(`The total payment is as follows: ` + totalPay)
//
// let fullClass = false
// let noConflictingSchedule = false
//
// let enrollStudent = !fullClass && !noConflictingSchedule
// console.log(`when ${enrollStudent}, enroll the student, false, do not enroll`);
//
// let itemsBought = 3;
// let premiumPerson = true;
// let offerNotExpired = true;
// let regularPerson = itemsBought < 2;
// let applyProductOffer = (regularPerson && offerNotExpired) && premiumPerson;

// console.log(applyProductOffer + `, if true, apply offer. If false, deny`);
//
// let username = 'codeup';
// let password = 'notastrongpassword';
//
// let atLeast5 = password.length >= 5;
// console.log(atLeast5);
// let noUsername = password !== username;
// console.log(noUsername)
// let noMoreThan20 = username <= 20;
// console.log(noMoreThan20)
// let noWhiteSpace = password.indexOf(' ') <= 0 && username.indexOf(` `) <= 0;
// console.log(noWhiteSpace)
