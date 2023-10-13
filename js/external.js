"use strict";

console.log("Hello from inline JavaScript");

alert("Welcome to my Website!");

let favoriteColor = prompt("What is your favorite color?");
console.log(`Great, ${favoriteColor} is my favorite color too!`);
alert(`Great, ${favoriteColor} is my favorite color too!`);


let littleMermaidDays = 0;
let brotherBearDays = 0;
let HerculesDays = 0;
let rentPerDay = 0;
let totalCost = 0;

//littleMermaidDays = prompt("how many days did you rent the Little Mermaid?");
//console.log(`${littleMermaidDays} days rented`);
//alert(`${littleMermaidDays} days rented`);

//brotherBearDays = prompt("how many days did you rent Brother Bear?");
//console.log(`${brotherBearDays} days rented`);
//alert(`${brotherBearDays} days rented`);

//HerculesDays = prompt("how many days did you rent Hercules?");
//console.log(`${HerculesDays} days rented`);
//alert(`${HerculesDays} days rented`);

//rentPerDay = prompt("What is the daily rental rate?");
//totalCost = (littleMermaidDays * rentPerDay) + (brotherBearDays * rentPerDay) + (HerculesDays * rentPerDay);
//alert(`So your total amount due will be ${totalCost}`);

let googlePay = 400;
let amazonPay = 380;
let fbPay = 350;
let googleHours = 6;
let amazonHours = 4;
let fbHours = 10;
let totalPayForWeek = (googlePay * googleHours) + (amazonPay * amazonHours) + (fbPay * fbHours);

googleHours = prompt("How many hours did you work for google?");
console.log(`${googleHours} hours worked.`);
alert(`So you worked ${googleHours} hours at Google.`);
googlePay = prompt(`How much did you make for those ${googleHours} hours?`);
console.log(`${googlePay} is what google paid for those hours.`);
alert(`Google paid you ${googlePay} for ${googleHours} hours of work, very nice!`);

amazonHours = prompt("How many hours did you work for Amazon?");
console.log(`${amazonHours} hours worked.`);
alert(`So you worked ${amazonHours} hours at Amazon.`);
amazonPay = prompt(`How much did you make for those ${amazonHours} hours?`);
console.log(`${amazonPay} is what Amazon paid for those hours.`);
alert(`Amazon paid you ${amazonPay} for ${amazonHours} hours of work, very nice!`);

fbHours = prompt("How many hours did you work for Facebook?");
console.log(`${fbHours} hours worked.`);
alert(`So you worked ${fbHours} hours at Facebook.`);
fbPay = prompt(`How much did you make for those ${fbHours} hours?`);
console.log(`${fbPay} is what Facebook paid for those hours.`);
alert(`Facebook paid you ${fbPay} for ${fbHours} hours of work, very nice!`);

alert(`Your total paycheck for this week will be $${totalPayForWeek}!`)