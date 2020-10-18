// constants for DOM
const bookContainer = document.getElementById("book-container");
const addBookButton = document.getElementById("add-book");

let library = [];

class Book {
    constructor(title, author, numPages, read = false) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }
    validateBook() {
        if (this.title != "" && this.author != "" && this.numPages > 0) {
            return true
        } else {
            return false
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
    }

    render() {
        console.log('render some stuff to document')
        console.log(this.books)
    }
}

let myLibrary = new Library();

addBookButton.addEventListener('click', function() {
    const authorName = document.getElementById("author");
    const title = document.getElementById("title");
    const numPages = document.getElementById("pages");
    const read = document.getElementById("read").checked;
    let book = new Book(title.value, authorName.value, numPages.value, read);
    if (book.validateBook()) {
        $("#book-form").modal("toggle");
        myLibrary.addBook(book);
        myLibrary.render();
        authorName.value = "";
        title.value = "";
        numPages.value = "";
        document.getElementById("read").checked = false;
    } else {
        alert("Please complete form")
    }
})
