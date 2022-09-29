$(function(){

// $.get("http://api.openweathermap.org/data/2.5/onecall", {
//     APPID: OPEN_WEATHER_APPID,
//     lat: 29.423017,
//     lon: -98.48527
// }).done(function(data) {
//     console.log(data);
// });
//

// function windCardinalDirection(degrees){
//     let cardinalDirection = '';
//     if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
//         cardinalDirection = "N";
//     } else if (degrees > 11.25 && degrees  <= 33.75) {
//         cardinalDirection = "NNE";
//     } else if (degrees > 33.75 && degrees <= 56.25) {
//         cardinalDirection = "NE";
//     } else if (degrees > 56.25 && degrees <= 78.75) {
//         cardinalDirection = "ENE";
//     } else if (degrees > 78.75 && degrees <= 101.25) {
//         cardinalDirection = "E";
//     } else if (degrees > 101.25 && degrees <= 123.75) {
//         cardinalDirection = "ESE";
//     } else if (degrees > 123.75 && degrees <= 146.25) {
//         cardinalDirection = "SE";
//     } else if (degrees > 146.25 && degrees <= 168.75) {
//         cardinalDirection = "SSE";
//     } else if (degrees > 168.75 && degrees <= 191.25) {
//         cardinalDirection = "S";
//     } else  if (degrees > 191.25 && degrees <= 213.75) {
//         cardinalDirection = "SSW";
//     } else if (degrees > 213.75 && degrees <= 236.25)  {
//         cardinalDirection = "SW";
//     } else if (degrees > 236.25 && degrees <= 258.75) {
//         cardinalDirection = "WSW";
//     } else if (degrees > 258.75 && degrees <= 281.25) {
//         cardinalDirection = "W";
//     } else if (degrees > 281.25 && degrees <= 303.75) {
//         cardinalDirection = "WNW";
//     } else if (degrees > 303.75 && degrees <= 326.25) {
//         cardinalDirection = "NW";
//     } else if (degrees > 326.75 && degrees <= 348.75) {
//         cardinalDirection = "NNW";
//     }
//     return cardinalDirection;
// }
//
//
function appendLeadingZeroes(n){
    if(n <= 9){
        return "0" + n;
    }
    return n;
}
//
const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function formatTime(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = months[dateTime.getMonth()];
    let day = dateTime.getDate();
    let hour = appendLeadingZeroes(dateTime.getHours());
    let minutes = appendLeadingZeroes(dateTime.getMinutes());
    let seconds = appendLeadingZeroes(dateTime.getSeconds());
    let formattedDateTime = month + " " + day + " " + year;
    return formattedDateTime;
}

getWeatherAndForecastData([-98.48527, 29.423017]);
//     $.get("http://api.openweathermap.org/data/2.5/weather", {
//         APPID: OPEN_WEATHER_APPID,
//         lat:    29.423017,
//         lon:   -98.48527,
//         units: "imperial"
//     }).done(function(data) {
//         // console.log(data)
//
//         const windSpeed = data.wind.speed;
//         const weatherDescription = data.weather[0].description;
//         const humidity = data.main.humidity;
//         const pressure = data.main.pressure;
//         const temperature = data.main.temp;
//         const highTemp = data.main.temp_max;
//         const lowTemp = data.main.temp_min;
//
//
//
//         // $(`.description`).html(`Description: ${weatherDescription}`);
//         // $(`.wind`).html(`Wind speed: ${windSpeed} km/h` );
//         // $(`.humidity`).html(`Humidity: ${humidity}%`);
//         // $(`.pressure`).append(pressure);
//         // $(`.temp`).html(`${Math.floor(temperature)}°F`);
//         // // $(`.card-minMax`).html(`${highTemp}°F/${lowTemp}°F`)
//
//
//     });
// $.get("http://api.openweathermap.org/data/2.5/forecast", {
//     APPID: OPEN_WEATHER_APPID,
//     lat:    29.423017,
//     lon:   -98.48527,
//     units: "imperial"
// }).done(function(data) {
//    console.log(data)
//     const cityName = data.city.name;
//     const timeStamp = data.list[0].dt;
//     $(`.city`).append(cityName);
//     $(`.card-date`).html(formatTime(timeStamp));
//     //Data for Tomorrow Card Down below:
//
//     renderCard(data, 8, "#forecast-1");
//     renderCard(data, 16, "#forecast-2");
//     renderCard(data, 24, "#forecast-3");
//     renderCard(data, 32, "#forecast-4");
//
//
// });


// Function that takes in coordinates, and gets weather data and forecast data from them
//     It also calls a function to render this information on the screen
function getWeatherAndForecastData(coordinates){
    let latitude = coordinates[1];
    let longitude = coordinates[0];

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat:    latitude,
        lon:   longitude,
        units: "imperial"
    }).done(function(data) {
        // console.log(data)

        const windSpeed = data.wind.speed;
        const weatherDescription = data.weather[0].description;
        const humidity = data.main.humidity;
        const pressure = data.main.pressure;
        const temperature = data.main.temp;
        const highTemp = data.main.temp_max;
        const lowTemp = data.main.temp_min;
        $(`.description-1`).html(`Description: ${weatherDescription}`);
        $(`.wind-1`).html(`Wind speed: ${windSpeed} km/h` );
        $(`.humidity-1`).html(`Humidity: ${humidity}%`);
        $(`.pressure-1`).html(`Pressure: ${pressure}`);
        $(`.temp-1`).html(`${Math.floor(temperature)}°F`);
        $(`.card-minMax-1`).html(`${highTemp}°F/${lowTemp}°F`)


        // $(`.description`).html(`Description: ${weatherDescription}`);
        // $(`.wind`).html(`Wind speed: ${windSpeed} km/h` );
        // $(`.humidity`).html(`Humidity: ${humidity}%`);
        // $(`.pressure`).append(pressure);
        // $(`.temp`).html(`${Math.floor(temperature)}°F`);
        // // $(`.card-minMax`).html(`${highTemp}°F/${lowTemp}°F`)


    });
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    latitude,
        lon:   longitude,
        units: "imperial"
    }).done(function(data) {
        console.log(data)
        const cityName = data.city.name;
        const timeStamp = data.list[0].dt;
        $(`.city-1`).html(`Weather in ${cityName}`);
        $(`.card-date-1`).html(formatTime(timeStamp));
        //Data for Tomorrow Card Down below:

        renderCard(data, 8, "#forecast-1");
        renderCard(data, 16, "#forecast-2");
        renderCard(data, 24, "#forecast-3");
        renderCard(data, 32, "#forecast-4");


    });

    function renderCard(data, index, cardID){
        const highTemp = data.list[index].main.temp_max;
        const lowTemp = data.list[index].main.temp_min;

        $(cardID).html(`
        <div class="card-date">Header</div>
        <div class="card-minMax text-primary">${Math.floor(highTemp)}°F/${Math.floor(lowTemp)}°F</div>
        <div class="weather-icon">Primary card title</div>
        <div class="description">Cloudy </div>
        <div class="humidity">Humidity: 60%</div>
        <div class="wind">Wind speed:  km/h</div>
        <div class="pressure">Pressure: </div> 
    `);
    }
}



//
// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     lat:    29.423017,
//     lon:   -98.48527,
//     units: "imperial"
// }).done(function(data) {
//     console.log(data)
//
//     const windSpeed = data.wind.speed;
//     const weatherDescription = data.weather[0].description;
//     const humidity = data.main.humidity;
//     const pressure = data.main.pressure;
//     const temperature = data.main.temp;
//     const highTemp = data.main.temp_max;
//     const lowTemp = data.main.temp_min;
//
//
//



// });
    const restaurante =



        mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 7,  //starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });
    map.setZoom(14);
    map.setCenter([-115.1547432263104, 36.12005182407044]);
    // document.getElementById("zoomSubmit").addEventListener('click', function(e){
    //     e.preventDefault();
    //     map.setZoom(document.getElementById("zoom").value);
    // });
    // const codeupMarker = new mapboxgl.Marker()
    //     .setLngLat([-115.1547432263104, 36.12005182407044])
    //     .addTo(map);
    // const codeupPopup = new mapboxgl.Popup()
    //     .setHTML('<p class="mt-3" style="width: 250px;">Bahama Breeze</p>');
    // codeupMarker.setPopup(codeupPopup);




    let coords;
    function getCoords(address, token){
        geocode(address, token).then(function(coordinates){
            console.log(coordinates);
            coords = coordinates;
        })
    }
    getCoords("375 Hughes Center Dr, Las Vegas", MAPBOX_API_TOKEN);
    console.log(coords);

    document.getElementById("geo-button").addEventListener('click', function(e) {
        e.preventDefault();
        const address = document.getElementById("geo-bar").value;
        geocode(address, MAPBOX_API_TOKEN).then(function(coordinates){
            console.log(coordinates);
            const userMarker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
            map.setCenter(coordinates);

            // get weather data and forecast data with the new coordinates

            getWeatherAndForecastData(coordinates);
            $(`#forecast-cards`).removeClass(`d-none`)

        });
    });
});