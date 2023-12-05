import { randomGreeting } from "./greeting-logic.js" //imports from the greeting-logic.js

export function formSubmit(e) {
    console.log("form submitted")
    e.preventDefault();

    const userName = document.getElementById("userName");
    const greetingReturn =document.getElementById("greetingReturn");

    if(userName.value) {
        const greeting = randomGreeting();
        const fullGreeting = `${greeting}, ${userName.value}!`
        greetingReturn.innerText = fullGreeting;
    }
}

const greetingForm = document.getElementById("greetingForm");
greetingForm.addEventListener("submit", formSubmit)