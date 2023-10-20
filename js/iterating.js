(function(){
    "use strict";



// -------------NOTES-------------
// do we use let or const for arrays?
//elements are what is inside an array
// Declaring an array.
//     let emptyArr = [];
//     console.log(Array.isArray(emptyArr));
//
//     let cheeses = ["Cheddar", "String", "Wensleydale"]; // This arrays contains 3 elements.
//
//     let falsyValues = [0, "", false, undefined, null]; // We can collect different data types using arrays.
//     //...However, this can lead to some unintended results with a looping/iterative structure
//
//     console.log(cheeses[1]) // this will print the second element in our cheese array.
//     console.log(cheeses.indexOf("Cheddar")); // This will return and print 0
//     console.log(cheeses[0].indexOf("Brie")); // This returns -1
//     console.log(cheeses.indexOf("White Cheddar")); // This will return and print -1
//     console.log(cheeses[cheeses.length - 1]);
//
//     console.log(cheeses.length)
//
//     // Let's create a loop to print all of our cheeses to the console!
//     for (let i = 0; i < cheeses.length; i++) {
//         console.log(cheeses[i]);
//     }
//
//     for (let i = cheeses.length - 1; i >= 0; i--) {
//         console.log(cheeses[i]);
//     }
//
//     //For Each version
//     cheeses.forEach(function (cheese) {
//         console.log(cheese);
//     });
//
//     cheeses.forEach(function (cheese, index) {
//         console.log(`${index}: ${cheese}`);
//     });
//
//     cheeses.forEach(function (cheese, index, array) {
//         console.log(`${index}: ${cheese}`);
//         console.log(array);
//     });

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ["seth", "john", "mark", "pat"];
    console.log(names)
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("the first name in the array is: " + names[0]);
    console.log("the second name in the array is: " + names[1]);
    console.log("the third name in the array is: " + names[2]);
    console.log("the fourth name in the array is: " + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is: ' + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(names => console.log(`Here is a name: ${names}.`));

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
function first(value) {
    return value[0];
}

    console.log(first(names));
    function second(value) {
        return value[1];
}
    console.log(second(names));
    function last(value) {
        return value[value.length -1];
}

    console.log(last(names));

})();
