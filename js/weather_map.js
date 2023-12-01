"use strict";

mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-95.7309312, 29.8173647], // starting position [lng, lat]
    zoom: 4, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl()); // adds a zoom controller


// const city = 'houston';
// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WM_KEY}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.list[0].dt);
//         console.log(new Date(data.list[0].dt * 1000).toDateString())
//     })
//     .catch((e) => {
//         console.error(e);
//     });

