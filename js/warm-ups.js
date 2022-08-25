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

let stringArray = ["Jabba", "Darth Maul", "Hondo"];

function longestString(arrayOfStrings){
    let longest = "";
    for(let i = 0; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > longest.length)longest = arrayOfStrings[i];
    }
    return longest;
}