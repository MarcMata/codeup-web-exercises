// this is a comment
// and i start again

// let var1 = true //Boolean
// let var2 = 356321.01 //Number
// let var3 = "Hello Codeup" //String - everything inside quotations
// let var4 = "356321.01" // Although it's still a number, inside the quotations it is a string
// let var5 = "2" + 2
// let var6 = 'Single quote string'
// let var7 = "Jason's been drinking"
// let var8 = `It wouldn't matter if I "used" single or double`
//
// let var9 = 123
// let var10 = false
// let var11 = 'true'
// let var12 = true
//
// let var13; //undefined
//
// let var14 = 'I like Yamba\'s sweater' // a backslash -->\ <-- will ignore that character coming after it
let var15; //undefined
let var16 = -4346;

let var17;
let var18 = "Logged in user";

let userName = "Marc";
let nameIdontLike = "Marc";

let userID = 8675309;
let postAuthorID = 3462353246;

let myShoes = "Ariats"; //lets can be changed
let myName = "Marc"; //const cannot be re-assigned. do not use a var

// console.log('The myShoes variable is equal to ' + myShoes);

myShoes = "Chanclas";

// console.log(myShoes)

// // myBankAccount = myBankAccount + 1;
// myBankAccount += 1;
//
// // myBankAccount = myBankAccount -1;
// myBankAccount -= 1;
//
//  // myBankAccount = myBankAccount % 2;
// myBankAccount %= 2;

let counter = 1;

counter++; //increments of 1
counter--; //decrements of 1
++counter; //Gets added before it is logged
--counter; //

let pie = 3.14;

// pie = pie.toFixed(); //cannot run tofixed on strings. Can be used for money.
// // let price = `$` + 21.50.toFixed(2); // multiple ways to do this problem
// // let students = 24;
// // students = students.toString(); //turn a string into a number, with a value
//
//  let price = "$24.75";
// price = price.replace(`$`, ``);
// price = parseFloat(price); //parseint is it's own function while toFixed is added to the end of data
// console.log(price);

let discordName = "[YOLOdfadfadf]Jason";
// discordName = discordName.split(']');
// console.log(discordName);
//  discordName = discordName[1].trim();
 // "Jason"
// let shortName = discordName.substring(0,3); //starts at 0.
// let sPosition = discordName.indexOf('s');
 // console.log(discordName)
 // console.log(discordName.length) //length starts at one, tells you how many characters are in the string. positions in an array start at 0.
 // console.log(shortName)
let guildCharEnd = discordName.indexOf(']') + 1;
let guildName = discordName.substring(0,guildCharEnd);
discordName = discordName.substring(guildCharEnd);
let consoleMessage = `The user's name is ${discordName}. 
And they are a member of the ${guildName} guild.`
 console.log(consoleMessage);
//  let user = "Marc";
// let dontLike = "marc";
// let message = "i don't like you! Go away!";
// message = message.toUpperCase();
//  if (user.toLowerCase() === dontLike.toLowerCase()) {
//   console.log(message)// can be done with another line of code or in the console log
//  } else {
//   console.log("Not Marc, you're cool")
//  }

//backtick syntax: `The user's name is _. And they are a member of the _guild.`


