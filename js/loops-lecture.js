// let slices = 4;
// console.log(`There is ${slices} slices`)
// while(slices >0){
//     console.log("I/'ll have a slice ");
// }
//
// console.log("No more pizza")
//
// let counter = 100;
// let number = 5;
// while (number < 200){
//     console.log(number);
//     number *= 2;
// }

// let counter = 1;
// let number = 5;
// while (number < 200){
//     console.log(number);
//     number *= 2;
// }
// Pseudoue Code
// Ask user input -- how much does something cost
// Assign the user input to a variable
// Declare a variable to hold the total cost
// Tell the user what the total is
// Get the user input for the next item's cost
// There needs to be a way for the user to say when there's no more items

// let total = 0;
// let priceOfItem = parseFloat(prompt("Enter the price of your item:"));
// total = total + priceOfItem;
// alert("Your total is now " + total);
// let userInput = "";
// while (userInput !== "stop"){
//     userInput = prompt("Enter the price of your next item:");
//         if(userInput) === "stop"){
//         alert("Your final total is " + total);
//     } else {
//                 priceOfItem = parseFloat(userInput);
//                 total= total + priceOfitem;
//                 alert("Your total is now " + total);
// }

// let total = 0;
// let priceOfItem;
// while(true){
// let userInput = prompt("Enter the price of your item:" + "\n Enter STOP when you are done");
//     if (userInput === "STOP") {
//         alert("Your final total is " + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is " + total.toFixed(2));
//     }
// }

// let number =  Math.ceil(Math.random() * 6);
// let guess;
// console.log(guess);
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// } while (guess !== number);
// alert(`Your guess of ${guess} matches the number ${number}!`);

// let allCones = Math.floor(Math.random() * 51) + 50;
//
// do {
//     let conesWanted = Math.floor(Math.random() * 5) + 1;
//
// if (conesWanted > allCones){
//             console.log(`Cannot sell you ${conesWanted} I only have ${allCones}`);
//         } else {
//             console.log(`${conesWanted} sold....`);
//             allCones = allCones - conesWanted;
//         }
//         console.log(`${allCones} left`);
// } while (allCones > 0);
//          console.log("Yay sold them all!");

// This is the loop control variable
// initialize it to a starting value
// let count = 100;
// // check the value of the loop control variable in a conditional test
// while (count >= 0){
//     console.log(count);
// // change the value of the loop control variable
//     count = count -1;
// }
//
// for(let count = 100; count >= 0; count = counnt - 1){
//         console.log(count);
// }

// for( let i = 100; i >= 0; i--){
//     console.log(i);
// }

// let i = 0;
// while (i < 100){
//     console.log(i);
//     i++;
// }

// for (i = 0; i < 100; i++){
//     console.log(i);
// }
//
// console.log ("Outside the loop: " + i);