//                          Warm-Ups!

// Write a function that accepts an array of numbers and returns its average.
// Bonus: if there are any non-numeirc values in the array, return false. Numeric strings should count as numeric values.

// Write a function that accepts an array of strings and returns the longest string. If there are two strings of equal length it returns the one with the lowest index.
// Bonus: if there are any vaulues that are nont strings, return false.


// let numbers = [
//     1,
//     "One",
//     2,
//     "Two",
//     3,
//     "Three",
//     4,
//     "Four",
//     5,
//     "Five",
//     6,
//     "Six",
// ];
//
// function arrayAverage(numbers){
//     let total = 0;
//     for(let i = 0; i < numbers.lenght; i++){
//     if 
//         total += numbers[i];
//     }
// }

// let stringArray = ["Jabba", "Darth Maul", "Hondo"];
//
// function longestString(arrayOfStrings){
//     let longest = "";
//     for(let i = 0; i < arrayOfStrings.length; i++){
//         if (arrayOfStrings[i].length > longest.length)longest = arrayOfStrings[i];
//     }
//     return longest;
// }




// Javascript Practice August, 29th 2022

// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22}
// ];
//
// function calculateTotalStudents(array){
//     let total = 0;
//     for(let i= 0; i < array.length; i++){
//         total += array[i].students;
//     }
//     return total;
// }
// // If this stumps you , try starting with the simpler form of the problem: write a function that calculates the sum of the elements of an array.  Thus, if you give it
// let numericArray = [8, 10, 20];
// // the function should return 38
//
// function caclulateTotalStudents(){
//
// }
//
// function arraySum(array){
//     let total = 0;
//     for(let i = 0; i < array.length; i++){
//             total += array[i];
//     }
//     return total;
// }

// console.log(arraySum(numericArray));

//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//     your referral bonus, and
//
//     the price of a beer can
//
// For example:
//
// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

// What's the cost of each level? level * level * priceOfCan

// so I need a totalCost accumulator variable and some kind of level variable that keeps track of what level I'm on
// and I need to keep looping until totalCost > bonus

function beeramid(bonus, price){
    let totalCost = 0;
    let levels = 0;
    while (totalCost < bonus){
        totalCost += levels * levels * price;
        if (totalCost + ((levels +1) ** 2 * price) > bonus){break;}
        levels++;
    }
    return levels;
}



const neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

const neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}


// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

function desirableNeighborhood(neighborhoodsObject){
    let total = 0;
    for(let i = 0; i < neighborhoodsObject.schools.length; i++){
            total += neighborhoodsObject.schools[i].rating;
    }
    return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low" && total >=24;
}



// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}

// const convertToObject = function(nameOfClass, numberOfStudents){
//     return {
//         class: nameOfClass,
//         numberOfStudents: numberOfStudents
//     }
//     return total;
// }

// Function expression with arrow syntax
//
// const covertToObject = (namedOfClass, numberOfStudnets) => {
//         return {
//             class: namedOfClas,
//             numberOfStudnets: numberOfStudents
//         }
// }
//
// console.log(convertToObject("Intro to Programming", 20));