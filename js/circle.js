(function() {
    "use strict";

//--------------------NOTES------------------
    //Math.
// .random() function returns a floating-point, pseudo-random number in the range [0, 1] that is, from 0 (inclusive) up to but not including 1 (exclusive),

// .round() function returns the value of a number rounded to the nearest integer (3.4 = 3, 3.5 = 4)

// .ceil() function will round up (3.1 = 4)

// .floor() function returns the largest integer less than or equal to a number. (45.95 = 5)

// .pow() function returns the base to the exponent power, that is, base^exponent  (2 raised to the 16 power, Math.pow(2, 16); // 65536)

// .sqrt() function returns the square root of a number. (Math.sqrt(9) = 3)

// .PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159




    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            let area = Math.PI * Math.pow(this.radius, 2);
            // hint: area = pi * radius^2

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area = this.getArea();
                if(doRounding)
                    area = Math.round(this.getArea());

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.


    circle.radius = 5;
    // log info about the circle



    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
