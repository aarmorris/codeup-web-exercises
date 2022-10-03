const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let output = '';

// prices.forEach((price, index, array) => {
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     output += `<p id="price-${index+1}">Item number: ${index + 1}. Price: $${price}. Tax: $${tax}. Total: $${total}.</p>`;
//     console.log(output);
//     $("div").html(output);
//     if (index === array.length-1){
//         $("div").append("<p>That's it!!!</p>");
//     }
// });

const pricesAfterTax = prices.map(price =>{
   const tax = (price * 0.0825).toFixed(2);
   const total = (price + parseFloat(tax)).toFixed(2);
   return parseFloat(total);
});
// console.log(prices);
// console.log(pricesAfterTax);

const doubledArray = prices.map(price => price * 2);
// console.log(doubledArray);

const desserts = ['sherbet', 'whisky cake', 'cupcake', 'eclair'];

const eatingDessert = desserts.map(dessert => `Eating ${dessert} yummmmmm`);
// eatingDessert.forEach(element => {
//     $("div").append(`<p>${element}</p>`);
// });

const cars = [
   {
      make: "Honda",
      model: "Civic",
      mileage: 10428
   },
   {
      make: "Toyota",
      model: "Corolla",
      mileage: 9425
   },
   {
      make: "Ford",
      model: "Mustang",
      mileage: 2567
   },
   {
      make: "Audi",
      model: "A3",
      mileage: 14500
   },
   {
      make: "Mazda",
      model: "3",
      mileage: 11248
   }
];

const mileages = cars.reduce((accumulator, car) => {

});



// const highestMileage = cars.reduce((accumulator, car, index, array) => {
//       accumulator.push(car.mileage);
//       if (index === array.length - 1){
//          return accumulator.sort(function (a, b){return b-a}[0]);
//       } else {
//
//       }
//       return accumulator;
// }, []);
// console.log(mileages);



// const mileages = cars.map(car => car.mileage);
// console.log(mileages);

// const newObject = cars.map(car => {
//    delete car.mileage;
//    return car;
// });

// console.log(cars[0]);

// const array = [4, 5, 7, 9];
//
// function doubleTheArray(array){
//    let newArray = [];
//    for (let i = 0; i < array.length; i++){
//       newArray.push(array[i] * 2);
//    }
//    return newArray;
// }

// console.log(doubleTheArray(array));

// const under10K = cars.filter(car => car.mileage < 10000);

// console.log(under10K[0].mileage);

// under10K.forEach(({make, model, mileage}, index) => {
//    output += `<p>Car number ${index + 1}: I found a ${make} ${model} with ${mileage} miles</p>`;
//    $("#output").html(output);
// });
//
// const under10DollarsWithTax =  prices.filter(price => price < 10)
//     .map(price =>{
//        const tax = (price * 0.0825).toFixed(2);
//        const total = (price + parseFloat(tax)).toFixed(2);
//        return parseFloat(total);
//     });

// .forEach(price => $("div").append(`<p>${price}</p>`));

// console.log(something);

// console.log(under10DollarsWithTax);
//
//
// const totalCost = prices.reduce(function(total, price){
//    return total + price;
// });

// console.log(totalCost);

// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// At index 0 it is like it does let total = array[0]

// let total = prices.reduce(function(total, itemPrice, index){
//    console.log(`The index is ${index}, the total is ${total.toFixed(2)}, the itemPrice is ${itemPrice}`);
//    return total + itemPrice;
// });
// $("#output").append(`<p>The total is ${totalCost}</p>`);

// the function passed to the reduce method takes an extra parameter, the accumulator
//The accumulator is often abbreviated "acc"

// const averagePrice = prices.reduce((function(accumulator, current, index, array){
//    console.log(accumulator.toFixed(2));
//    accumulator += current;
//    if (index === array.length -1) {
//       return accumulator/array.length;
//    }
//    return accumulator;
// }));

// console.log("You have $158.76 in your shopping cart.");
//
// const total = prices.reduce(function(total, priceOfItem){
//    return total + priceOfItem;
// }, 158.76);
//
// console.log(`Your total cost is ${total.toFixed(2)}.`);

const users = [
   {
      id: 1,
      name: 'ryan',
      email: 'ryan@codeup.com',
      languages: ['clojure', 'javascript'],
      yearsOfExperience: 5
   },
   {
      id: 2,
      name: 'luis',
      email: 'luis@codeup.com',
      languages: ['java', 'scala', 'php'],
      yearsOfExperience: 6
   },
   {
      id: 3,
      name: 'zach',
      email: 'zach@codeup.com',
      languages: ['javascript', 'bash'],
      yearsOfExperience: 7
   },
   {
      id: 4,
      name: 'fernando',
      email: 'fernando@codeup.com',
      languages: ['java', 'php', 'sql'],
      yearsOfExperience: 8
   },
   {
      id: 5,
      name: 'justin',
      email: 'justin@codeup.com',
      languages: ['html', 'css', 'javascript', 'php'],
      yearsOfExperience: 9
   }
];



let threeLanguages = users.filter(function(user){
   return user.languages.length > 2;
});
console.log(threeLanguages)

let totalExp = users.reduce((total, user) =>{
      return total + user.yearsOfExperience;
}, 0);

console.log(`The users have a total of ${totalExp} years of experience.`)
let averageExp = totalExp / users.length;
console.log(`The users have an average of ${averageExp} years of experience`);

let longestEmail = users.reduce((currentLongestEmail, user) =>{
   return currentLongestEmail.length > user.email.length ? currentLongestEmail : user.email;
});
console.log(`The longest user email is: ${longestEmail}`);

let userNames = users.reduce((list, user) => {
   return list += (user.name + ' , ')
}, "Your instructors are: ");
console.log(userNames);

let userNamesBetter = users.reduce((pre, user, index, usersArray) => {
   return pre + `${pre ? ' ,' : 'Your instructors are:'}${user.name}${(index == (usersArray.length -1)) ? '.' : ''}`
}, "");

let uniqueLanguages = users.reduce((accumulator, user)=>{
   user.languages.forEach(function(language){
      if(!accumulator.includes(language)){
         accumulator.push(language);
      }
   });
   return accumulator
}, []);
console.log(uniqueLanguages);