"use strict"

// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(users => {
//         users.forEach( user => {
//             // log each user's username (or login property)
//             console.log(user.login);
//         })
//     })

function gitHubLastCommit (username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `${GH_KEY}`}})
        .then(response => response.json())
        .then(gitHubObject => gitHubObject.filter(object => object.type === "PushEvent"))
        .then(pushEvents => {
            if (pushEvents.length > 0) {
                console.log(pushEvents[0].created_at);
                return pushEvents[0].created_at;
            } else {
                console.log('No PushEvents found.');
                return null;
            }
        });
}
gitHubLastCommit('sethcrist');