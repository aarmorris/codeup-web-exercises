// The Parts of a Function
// 1. Function keyword
// 2. The name of the function
// 3. Parentheses with zero or more parameters
// 4. If there is more than one parameter, the list is comma separted
// 5. Curly braces contain the function body
// 6. The fucntion body contains the code that runs when the fucntion is invoked
// 7. [optional but comon] return statement
// function sayHello(greeting, name)
//     console.log(`${greeting}, ${name}`); {



// }
//
// Here numer has global scope
// let number = 20;
// function localOrGlobal(){
//         console.log(number);
// }

// let number = 20;
// // Function declartion
// function localOrGlobal(){
//     let number = 10;
//     console.log(number);
// }
// localOrGlobal();
// console.log(number);
// anotherNumber = 20;

// Function expression
// const bark = function(){
//     console.log("woof!");
// }
// yap();
//
// function yap(){
//         console.log("yip yip");
// }
// function declartion
// function add(num1, num2){
//     return num1 + num2;
// }
// // function expression
//  const add = function(num1, num2){
//     return num1 + num2;
// }
// Arrow function - - if it only returns something, you don't need a return keyword

const add = (num1, num2) => num1 + num2;

// If there is only one parameter, you don't need parentheses around the parameter

const addTen = number => number + 10;

// If there are no parameters, you use empty parentheses

const helloWorld = () => "Hello World";