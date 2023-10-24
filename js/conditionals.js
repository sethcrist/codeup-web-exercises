"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color === "blue") {
        return "blue is the color of the sky";
    } else if (color === "red") {
        return "red is the color of Strawberries!";
    } else if (color === "cyan") {
        return "I dont know anything about cyan";
    } else {
        return `I dont know anything about ${color}`;
    }
}
console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//analyzeColor(randomColor);
//console.log(analyzeColor(randomColor))


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

let color = "green"
 switch(color) {
     case "blue":
         alert("blue is the color of the sky");
         break;
     case "red":
         alert("red is the color of Strawberries");
         break;
     default:
         alert(`${color}, I know nothing about that color`);
         break;
 }
let chosenColor = prompt("give me a color and i'll tell you something about it ");
analyzeColor(chosenColor);
alert(analyzeColor(chosenColor));
console.log(chosenColor);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let noDiscount = 0
let luckyNumberOne = .10
let luckyNumberTwo = .25
let luckyNumberThree = .35
let luckyNumberFour = .50
let luckyNumberFive = 1
function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 0) {
        return totalAmount;
    } else if (luckyNumber === 1) {
        return totalAmount * .9;
    } else if (luckyNumber === 2) {
        return totalAmount * .75;
    } else if (luckyNumber === 3) {
        return totalAmount * .65;
    } else if (luckyNumber === 4) {
        return totalAmount * .50;
    } else if (luckyNumber === 5) {
        return totalAmount - totalAmount;
    }
}
console.log(calculateTotal(0, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5, 100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);
let totalAmount = parseFloat(prompt("How much was your total bill?"));

alert(`total amount: ${totalAmount} and lucky number ${luckyNumber} - with discount you will pay: ` + calculateTotal(luckyNumber, totalAmount));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function numberFacts() {
    let decision = confirm("Would you like to enter a number?")
    if (decision === true) {
        let userNumber = prompt("What number would you like to enter?");
        if (userNumber > 0 && UserNumber % 2 === 0) {
            let numHundred = parseInt(UserNumber) + 100;
            alert("Your number is even");
            alert("Your number is positive");
            alert("Your number + 100 = " + numHundred);
        } else if (userNumber > 0 && UserNumber % 2 !== 0) {
            let numHundred = parseInt(userNumber) + 100;
            alert("Your number is odd");
            alert("Your number is positive");
            alert("Your number + 100 = " + numHundred);
        } else if (UserNumber < 0 && UserNumber % 2 === 0) {
            let numHundred = parseInt(UserNumber) + 100;
            alert("Your number is even");
            alert("Your number is negative");
            alert("Your number + 100 = " + numHundred);
        } else if (userNumber < 0 && UserNumber % 2 !== 0) {
            let numHundred = parseInt(userNumber) + 100;
            alert("Your number is odd");
            alert("Your number is negative");
            alert("Your number + 100 = " + numHundred);
        } else {
            alert("okay, bye");
        }
    }
}




//------------conditionals notes------------
//if (condition) {
//      this code will run if our condition is true
//}

/** "when I run out of milk: I will go to the store*/
// condition: out of milk
// action: go to the store

//let gotMilk = true
//if (gotMilk === false) { //could also have condition of !gotMilk
    //console.log("im going to the store to get more");
//}

/** To-Do: I want to make a block of code that logs a message to the console when a variable is set to the number 5. */
let possiblyFive = 5;
possiblyFive = "5";

if (possiblyFive === 5) {
    console.log("that five");
}

// we can also use our conditional logic in functions.



/** TO-Do: I want to build a function that returns a string when I pass a number as an argument. */
function isItANumber(parameter){
    if (typeof parameter === "number") {
        return "that's a number";
    }
}

// IF/ELSE statements: code that runs when a condition is met. but will also run with a default state.

// if (condition) {
//    i run the condition evaluates to true;
// } else {
//    otherwise i run;
// }

/** consider: if i owned one i'd get milk from my cow when i ran out, but since i dont ill go to the store */

let hasCow = false;
    if (hasCow) {
        console.log("going to go milk Bessie. BRB");
    } else {
       console.log("headed to the store to go get milk");
    }


/** TO_DO lets expand our previous isItANumber function. Now i want to also return string when we arent passed a number */

function isItANumber(parameter){
    if (typeof parameter === "number") {
        return "that's a number";
    } else {
        return "that's not a number...";
    }
}

//IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//      run this code;
// } else if (condition2) {
//      since the first condition wasn't met, and the second was i run;
// } else {
//      since neither the first or second condition was met I run default
// }

/** consider: "if i owned a cow, id get milk from it when i ran out. if i owned a goat, i could get milk from it, but since i dont
 * own either of those ill go to the store instead." */

//how would i write this as a if/else if/else code block? (will take the first true statement first)

let hasCowAgain = false;
let hasGoat = true;

 if (hasCowAgain) {
     console.log("Going to go milk the cow");
 } else if (hasGoat) {
     console.log("going to milk the goat");
 } else {
     console.log("going to store for some milk");
 }



/** TO-DO: Lets make a function that takes in a number and will return three different strings for an argument
 * lesser than, greater than, or equal to 35. */

function isThisThirtyFive(parameter) {
    if (parameter  === 35) {
        return "yup, that is 35 alright!";
    } else if (parameter > 35) {
        return `Nope, ${parameter} that is more than 35..`;
    } else {
        return `Nope, ${parameter} is less than 35.....`;
    }
}
console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(35));
console.log(isThisThirtyFive(36));




//TERNARY Expression: An expression to set a value based on boolean evaluation

// let message = (booleanValue) ? "Operation was true." : "Operation was false.": (if you see '?' it'll be TERNARY)
//          TRUE will be on left, FALSE will be on right
/** Consider: "Are we out of milk? If we are: ill head to the store, but if we do have milk: i want to make a bowl of cereal." */

//How would we write this as a ternary expression?

let doWeHaveMilk = true

let action = (doWeHaveMilk) ? "I'm gonna make me a bowl of cereal!" : "going to the store to get milk";
console.log(action);



/** TO-DO: look back at the if/else version of our isItANumber function. Lets refactor our if/else using a ternary expression. */

function isItANumber(parameter){
    return (typeof parameter === "number") ? "that's a number" : "that's not a number...";
}



// SWITCH STATEMENT: A statement with multiple cases that will trigger based on the value of a variable.

let color = prompt("What is your favorite color?").toLowerCase();

switch(color) {
    case "green":
        alert("What a coincidence, thats my favorite");
        break;
    case "orange":
        alert("thats my brothers favorite color");
        break;
    default:
        alert(color + " is a weird color, my dude.");
        break;
}

/** Consider: "i dont have a cow, goat, or camel. I guess ill have to go to the store for milk" */

// How would we write this as a switch statement?

let animal = "blue tongue skunk";
switch (animal) {
    case "cow":
        console.log("milking the cow");
        break;
    case "goat":
        console.log("milking the goat");
        break;
    case "camel":
        console.log("milking the camel");
        break;
    default:
        console.log("headed to the store fore milk");
        break;
}



/**TO-DO: Lets make a switch statement with a prompt for the user to input their favorite sandwich meat. If they like 'olive loaf' we should return on
 * alert to congratulate them on their bold choice, and if  they choose 'brisket' we should return a different alert: this one for congratulating them on the
 * 'right' answer. All other responses should trigger an alert stating apathy */

let meatOfChoice = prompt("Whats your favorite lunch meat?").toLowerCase();

switch(meatOfChoice) {
    case "olive loaf":
    case "oliveloaf":
        alert("wow! Thats a bold choice");
        break;
    case "brisket":
        alert("that is correct.");
        break;
    default:
        alert("meh, its not terrible. just not my favorite.");
        break;
}





