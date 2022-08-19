// for equivalent of while(true) - - for(;;)

while(true){
    let oddNumber = prompt("Please Enter an Odd Number.");
    if(oddNumber >= 1 && oddNumber <= 50 && oddNumber % 2 === 1){
        console.log("Number to skip is: " + oddNumber);
        console.log("");
        for(let i = 1; i <= 50; i+=2){
            if(i == oddNumber){
                console.log("Yikes Skipping number " + oddNumber)
                continue;
            } else {
                console.log(i)("Here is an odd Number")
            }
        }
        break;
    }
}



