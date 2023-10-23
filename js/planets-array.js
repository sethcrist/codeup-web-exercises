(function(){
    "use strict";
//--------------NOTES---------------
// .push will add to the END of the array

// .unshift will add the BEGINING of the array

// .shift will REMOVE the first element of the array

// .pop will lop of the last element of the array

// .slice method allows us to copy a portion of an array. The slice method optionally takes two arguments
// to define where the portion we want starts and stops. .slice will NOT modify the original array; it will return a new array.

// .reverse will reverse the elements in an array

// .sort will sort the elements in alphabetical order

// .split will turn a string into an array

// .splice is the slice method but destructive, it will remove the spliced fragment from the original array.



    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun")
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto")
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift()
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop()
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    let indexOfEarth = planets.indexOf("Earth")
    console.log(indexOfEarth);

    console.log("Reversing the order of the planets array.");
    planets.reverse()
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort()
    console.log(planets);
})();
