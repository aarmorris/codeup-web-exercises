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

// function beeramid(bonus, price){
//     let totalCost = 0;
//     let levels = 0;
//     while (totalCost < bonus){
//         totalCost += levels * levels * price;
//         if (totalCost + ((levels +1) ** 2 * price) > bonus){break;}
//         levels++;
//     }
//     return levels;
// }
//
//
//
// const neighborhood1 ={
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 6},
//         {name: "HS3", rating: 8}
//     ]
// }

// const neighborhood2 ={
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 8},
//         {name: "MS2", rating: 8},
//         {name: "HS3", rating: 8}
//     ]
// }

// const neighborhood3 ={
//     neighborhood: "Ginormous Ego Estates",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "ES1", rating: 9},
//         {name: "MS2", rating: 9},
//         {name: "HS3", rating: 9}
//     ]
// }


// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

// function desirableNeighborhood(neighborhoodsObject){
//     let total = 0;
//     for(let i = 0; i < neighborhoodsObject.schools.length; i++){
//             total += neighborhoodsObject.schools[i].rating;
//     }
//     return neighborhoodsObject.medianHomePrice < 300000 && neighborhoodsObject.crimeRate === "low" && total >=24;
// }
//


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


// const attendance = {
//     miami: 32789,
//     buffalo: 45678
//     protland: 24567
//
// }

// Given the attendance object, write a function that returns the total attendance across all teams.

// function totalAttendance(attendanceObject) {
//     let attendanceArray = Object.values(attendanceObject);
//     let total = 0;
//     for (let i = 0; i < attendanceArray.length; i++) {
//         total += attendanceArray[i];
//     }
//
//     return total;
// }
//
// function totalAttendance(attendanceObject){
//     let total = 0;
//     for (cost prop in attendance){
//         total += attendance[prop];
//     }
//     return total;
// }
//
// for (const prop in attendance){
//     console.log(attendance[prop]);
// }

// Given the attendance object, write a function that returns the average attenadance



// Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values

// function totalAttendance(attendanceObject){
//     let total = 0;
//     for (cost prop in attendance){
//         total += attendance[prop];
//     }
//     return total/Object.keys(attendance).length;
// }


// Given the attendance object, write a function that returns the total attendance across all teams.

// Given the attendance object, write a function that returns the average attendance

// Given the attendance object, write a function that returns an object with totalAttendance and averageAttendance properties set to the correct values

// Convert to Number
//  * You prepare a list to send to the insurance company. As you finish, you notice you misformatted it.
//  * Write a function named convertToNumber that takes in an object with at least one key/value pair, convert all the values to numbers.
//  *
//  * Examples
//  *
//  * convertToNumber({ piano: "200" }) ➞ { piano: 200 }
//  * convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
//  * convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
//  */

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space character, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/

// Both of these functions will work for the exercise above.
    
// let address = "8646 Sunny Oaks";
//
// function convertAddressToObject(addressString){
//     return {
//         streetNumber: addressString.substring(0, addressString.indexOf('')),
//         streetName: addressString.substring(addressString.indexOf('') + 1)
//     }
//
// }

// function converAddressToObject(addressString){
//     let addressArray = addressString.split('');
//     return {
//         streetNumber: addresssArray[0],
//         streetName: addressArray.slice(1, addressArray.length). join('')
//     }
// }


// -------------->


/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

// let peopleAndPets = [
//     {name: 'Fernando Mendoza', pets: 1},
//     {name: 'Douglas Hirsh', pets: 8},
//     {name: 'Kenneth Howell', pets: 2}
// ]
//
// function totalPets(arrayOfObjects){
//     for (let i = 0; i < arrayOfObjects.length; i++){
//         total += arrayOfObjects[i].pets;
//     }
//         return total;
// }
//
// function totalPets(arrayOfObjects){
//     let total = 0;
//     arrayOfObjects.forEach(function(object){
//
//     });
//     return total;
// }
//
// // -------> Future code down below that will be learned in later lessons
//
// function totalPets(arrayOfObjects){
//     return arrayOfObjects.reduce(function(acc, currentValue){
//
//     }, 0)
// }

// -- Write a function that takes in an input, checks that input, and returns true or false depending on some feature of the input (what kind of number, what kind of string, what type of data it is)
//

// -- Write a function that takes in an input, does something to it, and returns the modified data (do a mathematical operation on it, do a string method to modify it, use an array method to modify an array)

function doubleNumber(number){
    return number * 2;
}

function upperCase(string){
    return string.toUpperCase();
}

function repeatString(string){
    return string.concat(' ', string);
}

const myArray = [1, 2, 3, 4, 5, 6];

function removeFirstElement(array){
    array.shift();
    return array;
}

function moveFirstToLast(array){
    let firstElement = array.shift();
    array.push(firstElement);
    return array;
}
//
// -- Write a function that takes in an array and returns the array modified in some way -- certain elements removed, certain elements modified in a regular way (example, every numerical value doubled, every string uppercased)
//
// -- Write a function that accepts an array of objects where each object has at least one property with a numeric value, be able to return the total or average of the numeric values
//
// -- Write a function that accepts a string, breaks down the string into components, and returns an object where each component of the string has become the value of a property

let cityAndState = "Las Vegas, Nevada";

    // write a function that returns
// { city: "Las Vegas",
//   state: "Nevada"
// }

function cityStateObject(cityAndState){
    return {
        city: cityAndState.split(", ")[0],
        state: cityAndState.split(", ")[1]
    }
}



//
// -- Write a function that analyzes a string, returning the results of the analysis, example, return the length of the string

function analyzeString(string){
    return{
        length: string.length,
        firstLetter: string.charAt(),
        lastLetter: string.charAt(string.length -1)
    };

}


//
// -- Write a function that analyzes a string, returning an object that contains several properties with information about the string, example, length, firstLetter, and lastLetter properties
//
//
// -- Write a function that takes in a string and modifies it in some way.  Example write a function that takes in a string and replaces every instance of the letter e with the number 3, and every instance of the letter i with the number 1, and every instance of the letter o with the number 0, and a with 4.  Write a function that capitalizes every other letter in the string starting with the first letter, counting blank spaces as characters.  Try the same not counting blank spaces as characters.  Write a function that capitalizes the last letters of every word in a string.
//
//     /**
//      * Get Sum of People's Budget
//      * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
//      *
//      * Examples
//      *
//      * >> getBudgets([
//      *        { name: "John", age: 21, budget: 23000 },
//      *        { name: "Steve",  age: 32, budget: 40000 },
//      *        { name: "Martin",  age: 16, budget: 2700 }
//      *    ]) ➞ 65700
//      * >> getBudgets([
//      *        { name: "John",  age: 21, budget: 29000 },
//      *        { name: "Steve",  age: 32, budget: 32000 },
//      *        { name: "Martin",  age: 16, budget: 1600 }
//      *    ]) ➞ 62600
//      */
//
//
//     /**
//      * Get Student Top Notes
//      * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
//      * If the student does not have notes then let's assume their top note is equal to 0.
//      *
//      * Examples
//      *
            const students = [
           {
              id: 1,
            name: "Jacek",
            notes: [5, 3, 4, 2, 5, 5]
          },
          {
            id: 2,
              name: "Ewa",
             notes: [2, 3, 3, 3, 2, 5]
           },
          {
              id: 3,
              name: "Zygmunt",
              notes: [2, 2, 4, 4, 3, 3]
            }
          ]

        // function getStudentTopNotes (arrayOfStudentObject){
        //     const topNotes = [];
        //     arrayOfStudentObject.forEach(studentObject => {
        //        topNotes.push(Math.max(...studentObject.notes));
        //     });
        //     return topNotes;
        // }

        function getStudentTopNotes(arrayOfStudentObjects) {
            let topNotes = [];
            for(let i = 0; i < arrayOfStudentObjects.length; i++){
                let topNote = arrayOfStudentObjects[i].notes[0];
                for (let j = 0; j < arrayOfStudentObjects[i].notes.length; j++){
                    if (arrayOfStudentObjects[i].notes[j] > topNote){
                        topNote = arrayOfStudentObjects[i].notes[j];
                    }
                }
                topNotes.push(topNotes);
            }
            return topNotes;
        }
//
//
//     /**
//      * TODO:
//      * Remove the Letters ABC
//      * Create a function named removeABC that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
//      *
//      * Examples
//      * >> removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//      * >> removeABC("hello world!") ➞ null
//      * >> removeABC("") ➞ null
//      *
//      * Notes
//      * If the given string does not contain "a", "b", or "c", return null.
//      */
//
//
//     Write a function called removeBs that takes in an array of strings and returns an array of strings with all b's removed from each string. Assume the array contains only string elements.
//
// Examples...
//
// removeBs(['abc', 'ab', 'cat', 'Bay']) // returns ['ac', 'a', 'cat', 'ay']
//
//
//
//
//
// Write a function that accepts the top three bowling scores and returns the average.
//
//     Write a function that accepts the top three bowling scores and returns the average.
// 1. write a function
// 2. pass in parameters
// 3. 3 scores ( variables)
// 4. return something (number)
//
// let first = 120;
// let second = 234;
// let third = 90;
//
// Modify the function to accept an array of bowling scores and return the average
//
// Write a function that accepts an array of bowling scores and returns the highest
//
// Write a function that accepts an array of bowling scores and returns true if the highest score is divisible by 3