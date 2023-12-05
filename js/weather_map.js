"use strict";

mapboxgl.accessToken = MB_KEY;
const map = new mapboxgl.Map({ //registers the map
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-95.405664, 29.757964], // starting position [lng, lat], houston
    zoom: 15, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl()); // adds a zoom controller


const marker = new mapboxgl.Marker({ // starting point for the popup, houston
    color: "#ee1313",
    draggable: true
}).setLngLat([-95.405664, 29.757964])
    .addTo(map);
marker.on('dragend', function () { // marker can be dragged
    const newMarkerLocation = marker.getLngLat();
    console.log(newMarkerLocation);
    updateWeather(newMarkerLocation);

});
updateWeather({lng: -95.405664, lat: 29.757964})


document.querySelector("form").addEventListener("submit", async     (e) => { //for searching a new city
    e.preventDefault();
    const form = e.target
    const searchInput = form.querySelector('input[type="search"]');
    const cityName = searchInput.value.trim();

    if (cityName !== '') {
        try {
           const newLocation = await geocodeCity(cityName);
           marker.setLngLat(newLocation);
           updateWeather(newLocation);
        } catch (error) {
            console.error('Error getting the city', error);
        }
    }
    searchInput.value = '';
});



function updateWeather(lngLat) {
    map.flyTo({ //when a new marker is place the map will move to the new marker
        center: [lngLat.lng, lngLat.lat],
        essential: true,
        zoom: 10,
        speed: 1.5
    })
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lon=${lngLat.lng}&lat=${lngLat.lat}&appid=${WM_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log('weather data:', data)
            for (let i = 0; i < 5; i++) {
                const currentDate = new Date(data.list[i * 8].dt * 1000).toDateString(); // grabs the data for the date
                const currentTempKelvin = data.list[i * 8].main.temp; // grabs the data for the temperature
                const currentTempF = ((currentTempKelvin - 273.15) * 9 / 5) + 32; //  data for the conversion to F
                const description = data.list[i * 8].weather[0].description;
                const humidity = ` ${data.list[i * 8].main.humidity} %`; // grabs the data for the humidity
                const wind = ` ${data.list[i * 8].wind.speed} m/s`; // grabs the data for the wind speed

                const listItemColor = document.getElementById(`temp${i + 1}`); //change the color of the li with the temp
                if (currentTempF >= 0 && currentTempF <= 66.98) {
                    listItemColor.style.backgroundColor = 'skyblue';
                } else if (currentTempF >= 66.99 && currentTempF <= 76.98) {
                    listItemColor.style.backgroundColor = 'yellow';
                } else if (currentTempF >= 76.99 && currentTempF <= 100) {
                    listItemColor.style.backgroundColor = 'orangered'
                }

                document.getElementById(`date${i + 1}`).innerText = currentDate; // displays the date on all cards
                document.getElementById(`temp${i + 1}`).innerText = `Temp: ${currentTempF.toFixed(1)} F`; // displays the temp on all cards
                document.getElementById(`description${i + 1}`).innerText = description; // displays the description on all cards
                document.getElementById(`humidity${i + 1}`).innerText = ` Humidity: ${humidity}` // displays the humidity on all cards
                document.getElementById(`wind${i + 1}`).innerText = ` Wind: ${wind}`; // displays the wind on all cards
            }
        })
        .catch((e) => {
            console.error(e);
        })

}

async function geocodeCity (cityName) {
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=${MB_KEY}`);
    const data = await response.json();
    const coordinates = data.features[0].geometry.coordinates;
    return { lng: coordinates[0], lat: coordinates[1] };
}











