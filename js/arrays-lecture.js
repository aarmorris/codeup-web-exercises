//declaring an array literal:
// each item in an array is called an element.
//
// let grocerylist = ['bread', 'eggs', 'butter', 'milk'];
//
// for(let i = 0; i < grocerylist.length; i++)
//     if (i === grocerylist.length - 1){
//     console.log("I have to buy " + grocerylist[i] + " . ");
// } else {
//         console.log(" I have to buy " + groceryList[i] + " and ");
//     }

// let basicColors = [ 'red', 'blue', 'green', 'yellow'];
//     for(let i = 0; i < basicColors.length; i++) {
//         if (i % 2 === 1){
//      
//         console.log(basicColors[i]);
//     }
//        
//    function outputArray(array){
//         for(let i = 0; i < array.length; i++){
//             console.log(array[i]);
//    }
//     }
//         //outputArray(basicColors);
// True anoymous function
 let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
         prices.forEach(function(price, index) {
                 console.log('item number ' + (index + 1)
                 'costs' + price
         )

         });
//
// forEach loop takes an anonymous function
// the function we pass to the forEach loop has up to three parameters
// The first parameter represents the array elements
// the second parameter represents the element index
// the third parameter represents the array itself
// the second and third parameters are optional
// since the function is anonymous, we can use arrow syntax


prices.forEach(price => {
        console.log(price)

        // .push adds to the array
groceryList.push("potatoes");
        console.log(groceryList);
        // .pop removes last item in the array
        groceryList(List.pop();
        console.log(groceryList;
        // .unshift adds to item in front of the array
        groceryList.unshift("sliced cheddar");
        console.log(groceryList);
        // shift removes item from begining of element.
        groceryList.shift();

 let indexOfButter = groceryList.indexOf("butter");
 console.log(indexOfButter);

 groceryList[indexOfButter] = "peanut butter";
 console.log(groceryList);

 let firstHalfOfGroceryList = groceryList.slice(0, 2);
 console.log(FirstHalfOfGroveryList);
 let secondHalfOfGroceryList = groceryList.slice(2);
 console.log(secondHalfOfGroceryList);

 firstHalfOfGroceryList.push("butter");

 groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
 console.log(groceryList);

 groceryList.reverse();
 console.log(groceryList);

 groceryList.sort();
 console.log(groceryList);
 console.log(groceryList.reverse());

 groceryList[3] = "Blueberries";
 console.log(groceryList);
 console.log(groceryList.sort()));

let newList = [];

for(let i = 0; i < groceryList.length; i++){
groceryList[i] = groveryList[i].toLowerCase();
}

// console.log(groceryList.sort());

groveryList.forEach((Item, index, array) => {
    array[index] = item.toLowerCase();
})

    console.log(groceryList);

