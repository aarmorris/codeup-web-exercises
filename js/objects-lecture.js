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

// Let's create a controller object to handle anything players or game objects do that affects the state of the game.  The controller might handle taking user input and calculating the input's effect on the game.

// let fighter = {
//     name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8
// }
//
// let monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 6
// }
//
//
//
//
// let controller = {
//     attack: function(attacker, defender){
//         let defenderHPBeforeAttack = defender.hitPoints;
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         defender.hitPoints -= damage;
//         view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
//     }
// }

// The view object handles output

// let view = {
//     displayAttackResults: function(attacker, defender, defenderHPBeforeAttack, damage){
//         console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
//         console.log(attacker.name + " attacks!");
//         console.log(`${attacker.name} does ${damage} hit points of damage!`);
//         console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points.`);
//         console.log("-----------------");
//     }
// }
//
// let model = {
//     fighter: {
//         name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8
//     },
//
//     monster: {
//         name: "Goblin",
//         hitPoints: 8,
//         maxDamage: 6
//     }
// }

// // fighter.attack(monster);
// // fighter["attack"](monster);
//
// controller.attack(model.fighter, model.monster);
// controller.attack(model.monster, model.fighter);
//
//
// // fighter.attack(monster);
// // fighter["attack"](monster);
//
// controller.attack(fighter, monster);
// controller.attack(monster, fighter);
//
// // Creatihg objects
// // define an empty obeject and create properties dynamically
// let goblin = {};
// goblin.name = "Goblin";

// create a function that returns objects

// function makeMonster(name, hitPoints, maxDamage){
//     return {
//         name: name,
//         hitPoints: hitPoints,
//         maxDamage: maxDamage
//     }
// }
//
// model.hobgoblin = makeMonster("Hobgoblin", 11, 11);
// controller.attack(model.hobgoblin, model.fighter);
//
// // use an object constructor
//
// function Monster(name, hitPoints, maxDamage){
//     this.name = name;
//     this.hitPoints =  hitPoints;
//     this.maxDamage = maxDamage;
// }
//
// model.hobgoblinCaptain = new Monster("Hobgoblin Captain", 39, 14);
//
// controller.attack(model.hobgoblinCaptain, model.fighter);
//



// Arrays of objects

// Loop over an array of objects

// for (let i = 0; i < hourlyWeather.length; i++){
//     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`);
// }
// Use a forEach
// hourlyWeather.forEach(function(forecast) {
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`);
// });

// for loop with Arrow syntex
// hourlyWeather.forEach(forecast =>
//         cnosole.log(` At ${forecast.time} the temperature will be ${ forecast.temperature} and feel like ${forecast.feels_like}`);

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


// Objects Destructurings

const car = {
    make: "Toyata",
    model: "Tacoma",
    year: 2019,
    mileage: 12657
}
//
// let make = car.make;
// let carmodel = car.model;
//
// console.log(carModel);
// cnosle.log(make);

const {model, make, year, mileage} = car;
console.log(make);
console.log(model);
console.log(year);
console.log(mileage);

const outputCarInfo = ({make, model, year, mileage} = car) => {console.log(`${year} ${make} ${model} with ${mileage}`)}
outputCarInfo(car);









