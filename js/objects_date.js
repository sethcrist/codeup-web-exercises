(function() {
    "use strict";
//------------------------notes-----------------
//     let rightNow = new Date();
//     console.log(rightNow);
//
//     let christmas1998 = new Date("12-25-1998");
//     console.log(christmas1998);
//     console.log(christmas1998.getFullYear());
//     console.log(christmas1998.getMonth());
//     console.log(christmas1998.getDate());
//     console.log(christmas1998.getDay());
//
//     let halloween1978 = new Date("31 Oct, 1978");
//     console.log(halloween1978);
//
//     let someDate = new Date("1997-11-10T00:00:00");
//     console.log(someDate);
//
//
//     let codeup = new Date(2014, 1, 4, 9, 0, 0);
//     console.log(codeup.toString()); // Tue Feb 04 2014 09:00:00 GMT-0600 (CST)
//
//     console.log(christmas1998 - halloween1978);

//---------------------EXERCISE----------------------------

// todo:
// Create an array of months for printing dates
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months);
// todo:
// Create the date corresponding to your birthday using the JavaScript Date object.
    let jsBirthday = new Date ("19 February, 1995");


// todo:
// Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
// See link below for methods needed:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Getter

    console.log(`Here is my birthday using JavaScript: ${months[jsBirthday.getMonth()]} ${jsBirthday.getDate()}, ${jsBirthday.getFullYear()}`);
















})();