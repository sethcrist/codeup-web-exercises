(function() {
    "use strict";
//-------------NOTES---------------

    //     // We can create an object with properties like so!
    //     const kamea = {
    //         name: "Kamea",
    //         location: "San Antonio",
    //         colors: ["Black", "White"],
    //         species: "Orca",
    //         date_of_birth: new Date("12/6/2013")
    //     };
    //
    //     // We can also define property values to an object these two ways!
    //     kamea.age = 9;
    //     kamea["weight_in_lbs"] = 2400;
    //
    //     const babyBeluga = {
    //         name: "Baby Beluga",
    //         location: "The Deep Blue Sea",
    //         colors: ["White"],
    //         species: "Beluga",
    //         age: 2,
    //         date_of_birth: new Date("2/6/2021")
    //     };

    //     // We can access the properties but using the following syntax.
    //     console.log(kamea.age);
    //
    //     console.log(babyBeluga.name + " in " + babyBeluga.location + ", he swim so wild, and he swim so free...");
    //
    //     console.log(babyBeluga);
    //
    //     // Well, whales are neat and all, but what would be a more practical application for objects?
    //
    //     const forecast = [
    //         {
    //             day: "Monday",
    //             summary: "Partly cloudy.",
    //             highsLows: {
    //                 highActual: 92,
    //                 highFeels: 96,
    //                 lowActual: 72,
    //                 lowFeels: 74
    //             },
    //             icon: "../img/part_cloud.jpg", // This will make more sense when we start talking about manipulating the page using JS.
    //             location: {
    //                 lat: 30.2672,
    //                 long: -97.7431,
    //                 city: "Austin",
    //                 state: "TX",
    //                 country: "USA"
    //             }
    //         }, {
    //             day: "Tuesday",
    //             summary: "Sunny.",
    //             highsLows: {
    //                 highActual: 99,
    //                 highFeels: 99,
    //                 lowActual: 76,
    //                 lowFeels: 76
    //             },
    //             icon: "../img/sunny.jpg",
    //             location: {
    //                 lat: 30.2672,
    //                 long: -97.7431,
    //                 city: "Austin",
    //                 state: "TX",
    //                 country: "USA"
    //             }
    //         }, {
    //             day: "Wednesday",
    //             summary: "Rainy.",
    //             highsLows: {
    //                 highActual: 88,
    //                 highFeels: 92,
    //                 lowActual: 68,
    //                 lowFeels: 66
    //             },
    //             icon: "../img/rain.jpg",
    //             location: {
    //                 lat: 30.2672,
    //                 long: -97.7431,
    //                 city: "Austin",
    //                 state: "TX",
    //                 country: "USA"
    //             }
    //         }
    //     ];
    //
    //     // Above is an array of weather forecasts, here we can see nested objects within the different objects in the array.
    //
    //     forecast.forEach(function(prediction) {
    //         console.log(prediction.day);
    //         console.log(prediction.location.city);
    //     });
    //
    //     // While we store the different forecasts in an array to hold the information for the three different days, each object has different information in order to store the information for a daily weather forecast.
    //
    //     // Let's take a look at another object...
    //
    //     const user = {
    //         username: "JimLikesEggs",
    //         password: "this-is-am-good-password",
    //         avatar_img: 'path/to/file.jpg',
    //         d_o_b: new Date("2/17/1967")
    //     };
    //
    //     const user2 = {
    //         username: "BigDave",
    //         d_o_b: new Date("11/20/1991")
    //     };
    //
    //     // with this user object, let's add a method:
    //
    //     function calculateAge() {
    //         const today = new Date();
    //         if (this.d_o_b.getMonth() <= today.getMonth()){
    //             if (this.d_o_b.getDate() <= today.getDate()) {
    //                 this.age = today.getFullYear() - this.d_o_b.getFullYear();
    //             } else {
    //                 this.age = today.getFullYear() - this.d_o_b.getFullYear() - 1;
    //             }
    //         } else {
    //             this.age = today.getFullYear() - this.d_o_b.getFullYear() - 1;
    //         }
    //         return this.age;
    //     }
    //
    //     user.calcAge = calculateAge;
    //     user2.calcAge = calculateAge;
    //
    //     console.log(user.calcAge());
    //     console.log(user2.calcAge());
    //
    //     // Notice with the method we used the "this" keyword. This allows us to have an object to reference itself when creating a method. It will not work when trying to define a property.
    //
    //     // user.name = this.username; // This will give an error.
    //     //
    //     // console.log(user.name);
    //
    //     let firstName = "David";
    //     let surname = "Stephens";
    //     const instructor = {
    //         givenName: firstName,
    //         surname
    //     };
    //
    //     let { d_o_b, violinStatus } = user;
    //
    //     console.log(d_o_b);
    //     d_o_b = new Date("12/25/1998");
    //     console.log(d_o_b);
    //     console.log(user.d_o_b);
    //     console.log(violinStatus);
    //
    // })();




    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {
        firstName: "Seth",
        lastName: "Crist",
    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        //return "Hello from " + this.firstName + " " + this.lastName;
        return `Hello from ${this.firstName} ${this.lastName}`
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250}, // 1 - .12 = .88
        {name: 'George', amount: 320} // 1 - .12 = .88
    ];

        shoppers.forEach(shopper => {
            if (shopper.amount > 200) {
                console.log(`${shopper.name} gets a 12% discount, your discount will be $${(shopper.amount * .12).toFixed(2)}, bringing your total amount to ${(shopper.amount * .88).toFixed(2)}`);
            } else {
                console.log(`${shopper.name} you do not get the discount so your total will be ${shopper.amount.toFixed(2)}.`);
            }
        })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "The salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }

        }, {
            title: "A Wise Mans Fear",
            author: {
                firstName: "Patrick",
                lastName: "Rothfuss",
            }

        }, {
            title: "A Song of Ice and Fire",
            author: {
                firstName: "George",
                lastName: "Martin",
            }

            }, {
            title: "Eragon",
            author: {
                firstName: "Christopher",
                lastName: "Paolini",
            }

            }, {
            title: "First in",
            author: {
                firstName: "Gary",
                lastName: "Schroegn",
            },
        }
    ]
    console.log(books[1].title);
    console.log(books[1].author.firstName);
    console.log(books[1].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
//------------------------------------------------3 WAYS TO DO THIS------------------------------------
    // for (let i = 0; i < books.length; i++) {
    //     console.log(`book # ${i + 1} ${books[i].title} \n\n ${books[i].author.firstName} ${books[i].author.lastName} `);
    // }


    // books.forEach(function (book) {
    //     console.log(`Book # ${books.indexOf(book)+1}`);
    //     console.log(`Title: ${book.title}`);
    //     console.log((`Author: ${book.author.firstName} ${book.author.lastName}`))
    //     console.log('---')
    // })

    function showBookInfo(books){
        return `Title: ${books.title}\nAuthor: ${books.author.firstName} ${books.author.lastName}`;
    }
    for(let i = 0; i <books.length; i++){
        console.log(`Book # ${i + 1}\n${showBookInfo(books[i])}\n---`);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
