"use strict";
(() => {




//---------------notes--------------


//--------while loops------

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


// --------For loops---------
// for (let i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }

// common application
// let arrNum = [1,2,3,4,5,6,7,];
// for(let i = 0 ; i < arrNum.length; i++) {
//     console.log(arrNum[i])
// }

//-----BREAK-----
// let numberToStopAt = 5;
//
// for(let i = 1; i < 100; i++) {
//     console.log('Loop counter is: ' + i);
//     if (i === numberToStopAt){
//         console.log('we have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         //nothing after the break will get processed
//         //console.log('you will never see this line');
//     }
// }

//---------CONTINUE--------
// for (let i = 1; i < 100; i++) {
//     if (i % 2 !== 0) {
//         //number isnt even
//         //odd numbers arent as cool
//         //skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//     console.log('here is a lovely even number' + i);
// }


//-------------------EXERCISE FOR LOOPS--------------
// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication
// table for that number (just multiply by the numbers 1 through 10)
function showMultiplicationTable(inputNum) {

    for (let i = 1; i <= 10; i++) {
        console.log(`${inputNum} x ${i} = ${inputNum * i}`);
    }
}
showMultiplicationTable(7);

// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even.


for (let i = 1; i <= 10; i++) {
    let randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
    if (randomNumber % 2 === 0) {
        console.log(`${randomNumber} is even`);
    } else {
        console.log(`${randomNumber} is odd`);
    }
}

// 4. Create a for loop that uses console.log to create the output shown below.

for (let i = 1; i <= 9; i++) {
    let numberString = i.toString()
    console.log(numberString.repeat(i));
}

// 5. Create a for loop that uses console.log to create the output shown below.
for (let i = 100; i >= 0; i -= 5) {
    console.log(i);
}

})();
