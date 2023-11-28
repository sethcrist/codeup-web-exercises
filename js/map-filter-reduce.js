"use strict";
(() => {


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array
    let userLanguage = users.filter(function (e) {
        return e.languages.length >= 3;
    });
    console.log(userLanguage)

// 2. Use .map to create an array of strings where each element is a user's email address
    let stringArray = users.map(user => user.email);
    console.log(stringArray)

// 3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    let totalYearsOfExperience = users.reduce(function (total, years) {
        return total + years.yearsOfExperience;
    }, 0);

    let average = totalYearsOfExperience /5;

    console.log('Total Years Experience = ', totalYearsOfExperience);
    console.log('Average Experience = ', average)

// 4. Use .reduce to get the longest email from the list of users.
    let longestEmail = users.reduce((longest,user) => {
        if (longest.length < user.email.length) {
            return user.email;
        } else {
            return longest;
        }
    },"");
    console.log('The longest email is', longestEmail);

// 5. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    let listOfUserNames = users.reduce(function(person,user)  {
        return `${person} ${user.name}`;
    },"");
    console.log('Your instructors are:',listOfUserNames)
})();