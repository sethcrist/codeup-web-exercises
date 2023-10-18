"use strict";

//console.log(5 + 4); //console log prints to the console only
//let studentName = "Seth";
//console.log(studentName);

//let favoriteColor = "Orange";
//console.log(favoriteColor);

//Alert! - A pop up message to the user from JavaScript
//alert("Howdy from Codeup!");

//we can concatenate in side of an alert
//alert("howdy from " + studentName);

//confirm - a pop up message to the user from JavaScript, that can capture a boolean
//let confirmed = confirm(`we have lunch at 12:30 today?`);
//console.log(confirmed);

//Prompt - a pop up message to the user from JavaScript that asks for a text value
//let userString = prompt("what is your favorite food?");
//console.log(`Users favorite food: ${userString}`);

//functions
function addNumbers(num1, num2) {
    let sum = num1 + num2;
     return num1 + num2;
}

let sum = addNumbers(num1:5, num2:5);
console.log(sum);




// Anonymous Function
const increment = function(x){
    return x + 1;
}

let two = increment(1);
console.log(two);




//Arrow Functions
function helloWorld(){

    console.log("hi imugi")
    return "hello world";
}
const helloWorld2 = () =>{return "hello world"} //if a function is one line you dont need {} or the return statement

//global variables
let globalVar = "im a global variable"
function varAlert(){
    alert(globalVar);
}

//local variables
function localVarAlert(){
    let localVar = "look im a local";
    alert(localVar);
    alert(globalVar)
}

//-----------------Conditionals-----------------

//example
//hour
//if hour is between 6am and 12pm: good morning
//if it is between 12pm and 6pm: good afternoon
//otherwise: good evening

let hour = 20;

if (hour >= 6 && hour < 12)
    console.log('good morning');
else if (hour >= 12 && hour <18)
    console.log('good afternoon');
else
    console.log('good evening');




let pizzaPreference = prompt("What kind of pizza do you like?");

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else {
    alert(`${pizzaPreference} isn't my favorite, but let's order some!`);
}


