"use strict";

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then( res => res.json() )
        // to get all the data from the request, comment out the following three lines...
        .then( data => data.features[0].center);
}


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then( res => res.json() )
        // to get all the data from the request, comment out the following three lines...
        .then( data => data.features[0].place_name );
}


// geocode("3211 Grand Pkwy Suite 100, Katy, TX 77449", MB_KEY).then(coords => { //creates a marker set at that location
//     const losPerez = new mapboxgl.Marker()
//         .setLngLat(coords)
//         .addTo(map);
//
//     const losPerezPopUp = new mapboxgl.Popup()
//         .setHTML("<p>This is my first favorite restaurant, Los Perez!</p>"); //creates a popup when clicked on the set location
//
//     losPerez.setPopup(losPerezPopUp);
// });

// geocode("19111 Katy Fwy #100, Houston, TX 77094", MB_KEY).then(coords => { //creates a marker set at that location
//     const torchyTacos = new mapboxgl.Marker()
//         .setLngLat(coords)
//         .addTo(map);
//
//     const torchyTacosPopUp = new mapboxgl.Popup()
//         .setHTML("<p>This is my second favorite restaurant, Torchy's Tacos!</p>"); //creates a popup when clicked on the set location
//
//     torchyTacos.setPopup(torchyTacosPopUp);
// });
//
// geocode("98 W Grand Pkwy S #100, Katy, TX 77494", MB_KEY).then(coords => { //creates a marker set at that location
//     const toastedYolk = new mapboxgl.Marker()
//         .setLngLat(coords)
//         .addTo(map);
//
//     const toastedYolkPopup = new mapboxgl.Popup()
//         .setHTML("<p>This is my favorite breakfast restaurant, Toasted Yolk!</p>"); //creates a popup when clicked on the set location
//
//     toastedYolk.setPopup(toastedYolkPopup);
// });