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
const concat = (input1, input2) => "" + input1 + input2;

// could also use
//function concat (val1, val2) {
//    return "" + val1 + val2;
//}

// 11. write a function named 'checkForNumber' that accepts an argument and returns a string 'number' or 'not a number' based on whether the input is a number.
function checkForNumber(input) {
    if (typeof input === "number") {
        return "number"
    } else {
        return "not a number";
    }
}

// 12. write a function named 'evenOrOdd' that returns a string "even" or "odd" when passed a numeric argument. the result should represent whether the number is even or odd.
function evenOrOdd(input){
    if (input % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// 13. write a function named 'doubleTheElements' that accepts an array of numbers and returns an array with double the value of each number.
function doubleTheElements(input){
    const bucket = [];
    for (let num of input) {
        bucket.push(num *2);
    }
    return bucket;
}
// 14. write a function named 'sumOfElements' that accepts an array of numbers and returns the sum of those numbers.
function sumOfElements(input) {
    let bucket = 0;
    for (let num of input) {
        bucket += num;
    }
    return bucket;
}

// 15. write a function named 'totalPrice' that accepts an array of objects where each object represents a product from a store,
// that has a price property. the function should return the total of every object's price property.
function totalPrice(arr) {
    let bucket = 0;
    for (let item of arr) {
        bucket += item.price;
    }
    return bucket;
}

// 16. write a function named 'findHighestPrice' that accepts an array of objects where each object represents a product from a store, that has a price property.
// the function should return the highest price value from the array. 'findHighestPrice'.
function findHighestPrice(arr) {
    let highestPrice = 0;
    for (let {price} of arr) {
        if (price > highestPrice) {
            highestPrice = price;
        }
    }
    return highestPrice;
}

// 17. write a function named 'discountCheck'. the function should accept an object that  represents a customer's transaction. the object passed into the function should have
// 'customerName', 'items', and 'clubMember' properties. a customer will qualify for a discount if they have a total from the 'items' property of 150 or greater, or if they are a club
// member. 'discountCheck' should return a boolean representing whether the customer described by the object qualifies for a discount.
// HINT: the 'totalPrice function may be used to calculate the total price of the items by passing in the array of items.
function discountCheck(customer) {
    return totalPrice(customer.items) >= 150 || customer.clubMember;
}
// 18. write a function named 'newProduct' with two parameters, a string that contains a name, and a number representing the products price and returns an object with properties
// 'name' and 'price'.
function newProduct(name, price) {
    return {name, price};
}
// 19. write a function named 'countWords' that accepts a string and returns the number of words in that string.
function countWords(str) {
    if (str === "") {
        return 0;
    } else {
        return str.split(" ").length;
    }
}
// 20. write a function named 'describeNumber' that takes in an integer and will return an object describing different features of the input as a number. if the input is a number,
// the object should have three properties: 'value' for the value passed, evenOrOdd which should be a string to identify whether the passed argument is evenly divisible by 2,
// and 'numberOfDigits' which should count the number of digits in the argument passed into the function
function describeNumbers(num) {
    return {
        value: parseInt(num),
        evenOrOdd: evenOrOdd(num),
        numberOfDigits: num.toString().length
    }
}
// 21. write a function named 'screamingSnakeCase' that accepts a string that has several words each seperated by a space, and returns a string with each word in all caps,
// and with the spaces replaced by underscores. (ex. SCREAMING_SNAKE_CASE).
function screamingSnakeCase(str) {
    return str.toUpperCase().split(" ").join("_");
}


// 1. Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
function isNegative(input){
    if (input < 0) {
        return true;
    } else {
        return false;
    }
}

// 2. Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
function isTen(number) {
    if (typeof number === 'number' && !isNaN(number)) {
        return number === 10;
    }
    return false;
}

// 3. Write a function named double that accepts a number and returns the number doubled.
function double(input) {
    return input * 2;
}

// 4. Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.
function remove9s(input) {
    return input.filter(function (num) {
        return num !== 9;
    });
}

// 5. Write a function named average that accepts an array of numbers and returns the average of those numbers.

function average(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

// 6. Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
function countOdds(array) {
    let count = 0;
    for (let number of array) {
        if (number % 2 !== 0) {
            count++;
        }
    }
    return count;
}

// 7. Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property.
// The function should return the average of every object's sales property.
function averageSales(people) {
    let totalSales = 0;
    let count = 0;
    for (let person of people) {
        totalSales += person.sales;
        count++;
    }
    return totalSales / count;
}

// 8. Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character,
// and returns an object with properties firstName and lastName.
function convertNameToObject(fullName) {
    let parts = fullName.split(' ');
    let firstName = parts[0];
    let lastName = parts[1];
    return {
        firstName,
        lastName,
    }
}

// 9. Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) != -1) {
            count++;
        }
    }
    return count;
}

// 10. Write a function named analyzeWord. It should take in a string and return an object with information about the input word.
// The object returned should have the following properties:
// word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word

// analyzeWord('codeup')
// { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }
function analyzeWord(str) {
    let obj = {
        word: str,
        numberOfLetters: 0,
        numberOfVowels: 0
    }

    for (let i = 0; i < str.length; i++) {
        obj.numberOfLetters++;
    }

    obj.numberOfVowels = countVowels(str);

    return obj;
}

//11. Write a function named capitalizeName that accepts a string that is a first and last name separated by a space,
// and returns a string that that has the first and last names capitalized.
// capitalizeName('ron weasley') // "Ron Weasley"
// capitalizeName('Harry Potter') // "Harry Potter"
// capitalizeName('Nathan drake') // "Nathan Drake"
function capitalizeName(str) {
    let fullName = str.split(" ");
    for (let i = 0; i < fullName.length; i++) {
        fullName[i] = fullName[i] [0].toUpperCase() + fullName[i].substring(1);
    }
    return fullName.join(" ");
}
