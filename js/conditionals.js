// let flavor = prompt("Welcome to Codeup ice crea. What flavor do you want?");
//
// flavor = flavor.toLowerCase();
// if (flavor === "chocolate") {
//     alert("One chocolate coming right up!");
// }   else if (flavor === "vanalla") {
//
// } else {
//     alert("We do not have that flavor. Sorry! :(");
// }

// switch (flavor) {
//     case("chocolate"):
//         alert("One chocolate coming rihgt up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         alert("One straberry coming right up!");
//         break;
//       default:
//         alert("We do not have that flavor. Sorry! :(");
//         break;
// }

// let decision = confirm("Are you sure you want to close this page?");
// alert(decision);

// if(decision) {
//     alert(" Ok, closing the page.");
// } else {
//     alert("Ok, keeping page open");
// }

// (decision)?alert("Closing the page"):alert("Keeping page open.");

// let number = prompt("Enter a number.");
//
// function divisibleByFive(number){
//     if (number % 5 === 0 && number !== null && number !== "") {
//         alert("That number is divisible by 5");
//     } else {
//         alert("That number is not divisible by 5");
//     }
// }

// divisibleByFive(prompt("Enter a number"));
//
// function divisibleByFive(number) {
//     alert(number % 5 === 0 ? "That number is divisble by 5": "That number is not divisible by 5");
// }

// function alertMVPCustomer(purchaseTotal){
//     if (purchaseTotal > 1000){
//         alert("MVP")
//     }
// }
//
// alertMVPCustomer(1001);

// function isMVP(purchaseTotal){
//     return purchaseTotal > 1000;
// }
//
// let customer1purchase = 1001;
//
// if (isMVP(customer1purchase)){
//     alert("MVP")
// }

"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color){
//     if (color === "red") {
//         return("Fire truck's normally come in red!")}
//     else if(color === "blue"){
//         return("The sky is blue some will say otherwise.")}
//     else if(color === "green"){
//         return("Grass is green and comfy to relax on.")}
//     else {
//         return("Seem's like a fine color I would not disagree?");
//     }
// }




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];

// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
 //    let colorSelection = prompt("Pick a Color either Red, Blue or Green.")
 //    let colorsCase = colorSelection.toLowerCase();
 //
 //
 //    switch (colorsCase){
 //    case("red"):
 //         alert("Fire truck's normally come in red!");
 //         break;
 //    case("blue"):
 //         alert("The sky is blue some will say otherwise.");
 //         break;
 //     case("green"):
 //        alert("Grass is green and comfy to relax on.");
 //         break;
 //       default:
 //         alert("Seem's like a fine color I would not disagree?");
 //         break;
 // }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(number, total) {
    if (number == 0) {
        return ("Sorry you dont qualify for a discount");
    } else if (number == 1) {
        return total - (total * .10) + " You qualify for a 10% discount";
    } else if (number == 2) {
        return total - (total * .25) + " You qualify for a 25% discount";
    } else if (number == 3) {
        return total - (total * .35) + " You qualify for a 35% discount";
    } else if (number == 4) {
        return total - (total * .50) + " You qualify for a 50% discount";
    } else if (number == 5) {
        return ("You get everything free!");
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
let totalBill = prompt("Your Total Bill ");
calculateTotal(luckyNumber, totalBill);
alert("Your price before discount is " + totalBill);
alert("Your lucky number is " + luckyNumber);
alert("Your price after discount " + (calculateTotal(luckyNumber, totalBill)));




/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */



let wantsToEnterNumber = confirm("Do you want to enter a number?");
if (wantsToEnterNumber){
    let userNumber = parseFloat(prompt("Enter a number"));
}

if (userNumber % 2 === 0) {
    alert(userNumber + " is even;")
} else {
    alert(userNumber + " is odd;");
}
    alert(userNumber + " plus 100 equals " + userNumber +100));
    if(userNmber < 0) {
        alert("That is a negative number");
    } else
        alert("That is a positive number");

