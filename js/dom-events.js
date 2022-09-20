// The three steps of handling events

// 1. Get a reference to the element that will trigger the event

// let theButton = document.querySelector("button");


// 2. Write the function that will be triggered by the event

// A function is a set of iinstructions. This kind of function that is triggered by an event is called an event handler, or also called callback
// The function contains the instructions that will run when the event is triggered

// function eventHandler(){
//     alert("You clicked me!");
// }

// 3. Register the handler

// We can use addEventListener with the type of event and function that will be triggeed

// theButton.addEventListener('click', eventHandler);

// theButton.onclick = eventHandler;

// Short hand on writing DOM events.

// document.querySelector('button').addEventListener('click', function() {
//     alert('You clicked me!')
// });



// Mini-exercise:
// Use html and css to create a square with a background color on an html page.
//     Register an event handler and write its code such that when you click on the square, it
// 1. alerts that it is a square ("I am a square") and
// 2. alerts what color it is. ("I am a big hot pink square")

let theSquare = document.querySelector('.square');

let theHandler = function(){
    alert('I am a square');
}

theSquare.addEventlistener('click', theHandler);

theSquare.addEventlistener('click', function(event){
    console.log(event.target);
}
// This selects targets and applies attributes to selected item or object.
let theColor = getComputedStyle(e.target).backgroundColor
                console.log(theColor);

theSquare.addEventlistener('click', function(e){
    console.log(e.target.className);
    let theColor = getComputedStyle(e.target).backgroundColor
    console.log(theColor);
    document
}

let theButton = document.querySelector('button');

let counter = 0;

let buttonClickfunction = function(){
    counter++;
    console.log(counter);
    if (counter % 2 === 0) {
        document.querySelector('p').innerText = counter + "is an even number";
    } else {
        document.querySelector('p').innerText = counter + "is an odd number";
    }
}
