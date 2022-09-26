

let names = [ "Julia", "Bob", "Harry", "Joe"];

//names.forEach(function(names){
        console.log(" Present " + names);

            //console.log(names);

    //for(let i = 0; i < names.length; i++) {
        //console.log(names[i]);
        // }

function firstItemArray(names){
        return names[0];


    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */ 
        // let names = ["Julia", "Bob", "Harry", "Joe"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
        console.log(names.lenght)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names.lenght[0])
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
        for(let i = 0; i < names.length; i++){
            console.log(names[i]);
        }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
        names.forEach(names => console.log(name));
        names.forEach(function(name){
            console.log(name);
        });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
        function first(array){
            return array[0];
    }
    
        function second(array){
            return array[1];
        }
        // Use .lenght to select the last element in the array
        function third(array){
            return array[array.length -1];
        }
    };