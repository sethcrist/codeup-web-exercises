"use strict";
(() => {


    const image = document.getElementById("profile-pic");
    setTimeout(() => {
    image.src="img/img/charzard.png";
}, 2000);

    const profileName = document.getElementById("profile-name");
    setTimeout(() => {
    profileName.innerHTML = "Charizard";
}, 4000);

    const profileDescription = document.getElementById("profile-desc");
    setTimeout(() => {
    profileDescription.classList.add("color");
    profileDescription.style.color = "red";
    profileDescription.style.fontFamily = "cursive";
}, 6000);

    const profileCard = document.getElementById("profile-card");
    setInterval(() => {
    profileCard.classList.toggle("background-color");
    // profileCard.style.background = "yellow";
    profileCard.style.background = "orange";
}, 2000);


})();