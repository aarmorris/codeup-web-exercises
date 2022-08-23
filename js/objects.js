

// (function() {
    "use strict"

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    //     let person = {
    //         firstName: "Aaron",
    //         lastName: "Morris",
    //         sayHello: function(person) {
    //         return (`Hello and good afternoon from ${this.firstName} ${this.lastName}`);
    //     }
    // }
    //     console.log(person.firstName)
    //     console.log(person.lastName)
    //     console.log(person.sayHello());

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // let shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // shoppers.forEach(function(shopper){
    //     let discount = (shopper.amount > 200 ? shopper.amount * .12 : 0).toFixed(2);
    //     let total = shopper.amount - discount;
    //     console.log(`${shopper.name} -- total: $${shopper.amount}, discount: $${discount}, final amount: $${total}`);
    // })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
//     let books = [
//         {
//             book: 1, title: "48 Laws Of Power", author: {firstName: "Robert", lastName: "Greene"}
//         },
//         {
//             book: 2, title: "Oliver Twist", author: {firstName: "Charles", lastName: "Dickens"}
//         },
//         {
//             book: 3, title: "To Kill A Mockingbird", author: {firstName: "Harper", lastName: "Lee"}
//         },
//         {
//             book: 4, title: "Persuasion", author: {firstName: "Jane", lastName: "Austen"}
//         },
//         {
//             book: 5, title: "The Mill on the Floss", author: {
//                 firstName: "George", lastName: "Eliot"
//             }
//         }
//     ];
// //  Javier's output code:
//     books.forEach(function (book, index) {
//         console.log("Book # " + (index + 1));
//         console.log("Title: " + book.title);
//         console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
//         console.log("----");
//     })

    // books.forEach(function(books,title,author){
    //     console.log(`Book # ${books.book} \n Title: ${books.title} \n Author: ${books.author.firstName + " " + books.author.lastName} \n ---`)
    // })
    // for(let i = 0; i < books.length; i++){
    //    console.log(`Name of title ${books[i].title} name of author ${books.firstName} ${books.lastName}`)};
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    //
    // function createBook(title, firstName, lastName) {
    //     return {
    //         title: title,
    //         author: {
    //             firstName: firstName,
    //             lastName: lasName
    //         }
    //     }
    // }

//     books.push(createBook("The Great Gatsby", "F. Scott", "Fitzgerald"));
//
//     function Book(title, firstName, lastName) {
//         this.title = title;
//         this.author = {
//             firstName: firstName
//         } lastName: lastName
//        
//     }
//
//
//             books.push(new Book("1984", "George", "Orwell"));
//
//
//             books.forEach(function(book, index){
//         console.log("Book # " + (index +1));
//         console.log("Title: " + book.title);
//         console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
//         console.log("----")};
//
//       function showBookInfo(book){
//           console.log("Title: " + book.title);
//           console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
//           console.log("----")};
//
//
// })      
//            
// })();



