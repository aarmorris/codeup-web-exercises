// let currentWeather = {
//     humidity: 77,
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75
//     description: "cloudy"
// }

// Use dot notation to access object property values under most circumstances

// console.log(currentWeather.temp);
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);
//
// console.log(currentWeather["humidity"]);

// Use bracket notation to access object property values when you need to use variable-driven property names

// You can do anything to an object property that you can do to any other variable

// console.log("The current weather is " + currentWeather.temp);
// if (currentWeather.temp > 95{
//     console.log("it's kind of hot");
// } else {
//     console.log("It's cool today for Texas");
// }

// loop through an array using for in loop

// for (let property in currentWeather) {
//     console.log(property + ": " + currentWeather[property]);
// }
//
// // Dynamically add new properties to existing objects
//
// currentWeather.uvIndex = 9.79;
// console.log(currentWeather.uvIndex);
//
// let userChoice = "clouds";
// console.log(currentWeather[userChoice]);
// userChoice = "temp";
//

// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     attack: function(opponent){
//         console.log(this.name + " attacks!");
//         let damage = Math.ceil(Math.random() * this.maxDamage);
//         opponent.hitPoints -= damage;
//         console.log(this.name + " does " + damage + "points of damage");
//         console.log(opponent.name + " now has " + opponent.hitPoints + " hit points.");
//     }
// }
//
// let monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 6
// }


// Arrays of objects

// Loop over an array of objects

// for (let i = 0; i < hourlyWeather.length; i++){
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`);
// }
// Use a forEach
// hourlyWeather.forEach(function(forecast) {
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`);
// });

// hourlyWeather.forEach(forecast =>
//         cnosole.log(` At ${forecast.time} the temperature will be

// Array of objects where the objects have proper

// let texasInfo = [
//     {
//         city: "San Antonio",
//         latitude: 29.423017,
//         longitude: -98.48527,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 77,
//             temp: 82.33,
//             feels_like: 88.79,
//             clouds: 75
//         }
//     },
//     {
//         city: "Houston",
//         latitude: 29.7915,
//         longitude: -95.093,
//         timezone: "America/Chicago",
//         currentWeather: {
//             humidity: 68,
//             temp: 87.44,
//             feels_like: 97.7,
//             clouds: 75
//         }
//     }
// ];
//
// console.log("The temperature in " + texasInfo[1].city + " is " + texasInfo[1].currentWeather.temp);












