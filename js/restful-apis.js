// API -- Application Programming Interface
// a set of rules defining how applications and/or devices can connect to each other and communicate with one another

// REST means representational state transfer.
//A pattern of design principles for APIs
// REST APIs communicate via HTTP requests

// In a REST API, communication by HTTP request is used to perform the standard set of actions called CRUD
// Create, Read, Update, Delete

// JSON JavaScript Object Notation is not mandatory but is popular because it is both human and machine-readable

//


// The R in CRUD: READ

const booksURL = "https://wide-past-waltz.glitch.me/books";
const moviesURL = "https://wide-past-waltz.glitch.me/movies";

function getMovies(){
    fetch("https://wide-past-waltz.glitch.me/movies").then(resp => resp.json()).then(data =>console.log(data));
}

getMovies()

// The C in CRUD: Create

const bookToPost = {
    title: "Eleanor of Aquitaine",
    author: {
        firstName: "Ralph",
        lastName: "Turner"
    }
}

const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(bookToPost)
}

function getBooks(){
    fetch(booksURL).then(resp => resp.json()).then(data=>console.log(data));
}

getBooks();

fetch(booksURL, postOptions).then(getBooks);