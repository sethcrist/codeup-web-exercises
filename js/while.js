"use strict";
(() => {


// let i = 0;
//
// while (i < 10) { //runs off of a boolean expression
//     console.log('while loop iteration #' + i);
//     i++;
// }

// common application
// let randomResult = 0;
// let loopCount = 0;
//
// while (randomResult !== 8) {
//     randomResult = math.floor(math.random() * (10 - 1 +1) +1);
//     loopCount++;
// }
// console.log(`the random result: ${randomResult}`);
// console.log(`the number of loops: ${loopCount}`);

//----DO WHILE LOOPS----
// let i = 10;
//
// do {
//     console.log('while loop iteration #' +1);
//     i++
// } while (i < 10);

// common Application

// let userResponse;
// do {
//     console.log("program running............")
//     userResponse = confirm("would you like to run the program again")
// }while(userResponse === true);

// 1. Create a while loop that uses console.log() to create the output shown below.

let i = 2;

while (i <= 65536) {
    console.log(i);
    i*=2;
}

// 2. An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number
// between 50 and 100 representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

let allCones = Math.floor(Math.random() * 50) + 50;

do {
    let customerCones = Math.floor(Math.random() * 5) + 1;
    if(customerCones <= allCones) {
        console.log(`customers buying ${customerCones} we have ${allCones} in stock, we have ${allCones - customerCones} left.`)
        allCones -= customerCones
    } else {
        console.log("we do not have enough cones, sorry")
    }
} while(allCones > 0);
    console.log("im all out of cones to sell!")

})();