"use strict";
(() => {


//------------break and continue--------

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
//         //skip the rest of the loop and continue with the net iteration
//         continue;
//     }
//     console.log('here is a lovely even number' + i);
// }

// 1 & 2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input
let userInput;
while(true) {
    userInput = parseFloat(prompt("Choose an ODD number between 1 and 50"));
    if(userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
        break;
    }
}
console.log(userInput);

for(let i = 1; i <= 50; i += 2) {
    if (i === userInput ) {
        console.log("oops gonna skip");
        continue;
    }
    console.log(`here is an odd number: ${i}`)
}
})();