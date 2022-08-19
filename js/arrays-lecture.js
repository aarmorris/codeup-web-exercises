//declaring an array literal:
// each item in an array is called an element.

let grocerylist = ['bread', 'eggs', 'butter', 'milk'];

for(let i = 0; i < grocerylist.length; i++)
    if (i === grocerylist.length - 1){
    console.log("I have to buy " + grocerylist[i] + " . ");
} else {
        console.log(" I have to buy " + groceryList[i] + " and ");
    }