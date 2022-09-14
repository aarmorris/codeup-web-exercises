let sayHey = function(){
    let count = 0;
    function hey(){
        if (count < 10){
            console.log("hey" + count); // Only stops output of function, function continues with this code.
            count++;
        } else {
            clearInterval();
        }

    }

    setInterval(hey, 1000); // miliseconds
}

// let count = 0;
// let thisTimeItWillStop;
// function hey(){
//     if( count < 10){
//         console.log("hey" + count);
//         count++
//     } else {
//         clearInterval(thisTimeItWillStop);
//     }
// }
// thisTimeItWillStop = setInterval(hey, 1000);


// clearer code down below 
// let sayHey = function(){
//     let count = 0;
//     function hey(){
//         if (count < 10){
//             console.log("hey" + count); // Only stops output of function, function continues with this code.
//             count++;
//         } else {
//             clearInterval(theInterval(hey,1000));
//         }
//
//     }
//
//     setInterval(hey, 1000); // miliseconds
// }


function tenHeys(){
    let count = 0;
    let thisWillStop = setInterval(function(){
            if (count < 10){
                console.log("hey" + count);
                count++;
            }   else {
                clearInterval(thisWillStop);
            }     
    }, 1000);
}


setTimeout(wakeUpUser, 5000)

function wakeUpUser(){
    alert("WAKE UUUUUUP!!!!");
}