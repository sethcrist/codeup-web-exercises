"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// function sayHello (name){
//     return ('Hello '+ name);
// }
// console.log(sayHello('codeup'));


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// let helloMessage = sayHello('Seth');
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// let myName = 'Seth';
// console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo(number) {
//     return number === 2;
//
// }
//
// console.log(random + ' ' + isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// function calculateTip(num1 , num2) {
//     let multiply = num1 * num2;
//     return num1 * num2;
// }
// let multiply = calculateTip(.20, 20);
// console.log(multiply);


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// let billTotal = Number;
// let percentage = Number;
// billTotal = parseFloat(prompt(`How much was your total bill?`));
// alert(`You spent $${billTotal} for your total bill`)
// console.log(billTotal)
// percentage = parseFloat(prompt(`and in decimal form how much would you like to tip?`));
// alert(`you would like tip ${percentage}`)
// console.log(percentage);
// alert(`you would tip this much ${calculateTip(billTotal, percentage)}`);



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// function applyDiscount(originalPrice, discountPercent) {
//     let discount = originalPrice * discountPercent;
//     return originalPrice - discount
// }
// console.log(applyDiscount(100, .2));
// console.log(applyDiscount(45.99, .12));


//practice
function shout(word) {
    let result = word + word;
    console.log(result);
    return result;
}

let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('good morning');
else if (hour >= 12 && hour <18)
    console.log('good afternoon');
else
    console.log('good evening');

//-----------------------practice assessment-------------------
// 1. Define a function named `isTrue` that takes in any input and returns true if the input provided is exactly equal to `true` in value and data type.
function isTrue(input) {
    return input === true;
}

// 2. Define a function named `isFalse` that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
function isFalse(value) {
    return value === false;
}

// 3. Define a function named `not` that takes in any input and returns the boolean opposite of the provided input.
function not(input) {
    return !input;
}

// 4. Define a function named `addOne` that takes in a single input. If the input is a number or a numeric string, return the value plus one.
function addOne(input) {
    if (typeof input === "number") {
        return input + 1;
    } else if (typeof input === "string") {
        return input + 1;
    }
}

// 5. Define a function named `isEven` that takes in a single input. If the input is an even number or a string containing an even number, return `true`.
// Any other input should return false for the output.
function isEven(number) {
    if (typeof number % 2 === 0) {
        return true;
    } else if (typeof number === "string") {
        return true;
    } else {
        return false;
    }
}

// 6. Define a function named `isIdentical` that takes in two input arguments. If each input is equal both in data type and in value, then return `true`.
// If the values are not the same data type or not the same value, return `false`.
function isIdentical(aug1, aug2) {
    if (aug1 === aug2) {
        return true;
    } else {
        return false;
    }
}

// 7. Define a function named `isEqual` that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.
function isEqual(arg1, arg2) {
    if (arg1 == arg2) {
        return true;
    } else {
        return false;
    }
}

// 8. Define a function named `or` that takes in two input arguments. The output returned should be the result of an `or` operation on both inputs.
function or(input1, input2){
    return input1 || input2;
}
// 9. Define a function named `and` that takes in two input arguments and returns the result of a logical `and` operation of both inputs.
function and(input1, input2) {
    return input1 && input2;
}
// 10. Define a function named `concat` that takes in two input arguments. If both arguments are strings, then return the concatenated result.
// If two numbers are provided, then return the string concatenation of each set of numerals.
function concat() {

}
