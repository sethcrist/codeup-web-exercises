//put the following array of greetings and create a function that returns a random greeting.
    //Make sure to export what you need from this file and import the random number function from numberUtils.

import { randomNumber } from "./number-utils.js"; //exported from number-utils.js

const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];

export function randomGreeting() {
        const randomIndex = randomNumber(0, greetings.length - 1);
        return greetings[randomIndex];
}

//export default randomGreeting(); // use this if you don't use "export function..."