import { storeObj, checkStorage, removeFromStorage } from './storage.js';
// constants for DOM
const bookContainer = document.getElementById("book-container");
const addBookButton = document.getElementById("add-book");

let library = [];

class Book {
    constructor(title, author, numPages, read = false, id = Date.now().toString()) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
        this.id = id;
    }
    validateBook() {
        if (this.title != "" && this.author != "" && this.numPages > 0) {
            return true
        } else {
            return false
        }
    }
    render() {
        const bookContainer = document.getElementsByClassName("book-container")[0];
        //book root
        let bookElement = document.createElement("div");
        bookElement.appendChild(generateIcon(this.id)); //###### UUID HERE
        bookElement.classList = "card book col-sm-12 col-md-4 col-lg-4";
        //book img thumbnail
        let bookImg = document.createElement("img");
        bookImg.classList = "card-img-top thumbnail img-fluid";
        bookImg.src = "./assets/images/eloquent-javascript.jpg";
        //book information
        let bookInfo = document.createElement("div");
        bookInfo.classList = "card-body";
        let bookTitleAndAuthor = document.createElement("h5");
            bookTitleAndAuthor.classList = "card-title"
            bookTitleAndAuthor.innerHTML = this.title + ", " + "by " + this.author
            bookInfo.appendChild(bookTitleAndAuthor);
        let bookPages = document.createElement("p");
            bookPages.classList = "pages";
            bookPages.innerHTML = this.numPages + " Pages - ";
            bookInfo.appendChild(bookPages);
        let readStatus = document.createElement("div");
        if (this.read == true) {
            readStatus.classList = "read";
            readStatus.innerHTML = "Read";
        } else {
            readStatus.classList = "unread";
            readStatus.innerHTML = "Unread"
        }
        bookInfo.appendChild(readStatus);
        bookElement.appendChild(bookInfo);
        bookElement.setAttribute('data-id', this.id);
        bookContainer.appendChild(bookElement);
    }
}

// removal of books from library.books ary and localstorage
function generateIcon(id) {
    let iconElement = document.createElement("i");
    iconElement.classList = "fas fa-times-circle fa-3x remove-book";
    iconElement.style = "position: absolute; margin-left: 2em; margin-bottom: 1.5em; top: 0; right: 0;";
    iconElement.setAttribute("data-id", id)
    iconElement.addEventListener('click', function() {
        let bookId = iconElement.getAttribute('data-id');
        removeFromStorage(bookId);
        myLibrary.removeBook(bookId);
        myLibrary.render();
    });
    return iconElement;
}

class Library {
    constructor() {
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
        storeObj(book);
    }

    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }

    render() {
        bookContainer.innerHTML = "";
        this.books.forEach(function(book, index) {
            book.render(index);
        });
    }
}

// grab info from form, create book obj, then clear form
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

// initialize library, check localstorage for existing books, and render
let myLibrary = new Library();
checkStorage().forEach(function(book) {
    //make book obj so it has render method
    myLibrary.books.push(new Book(book.title, book.author, book.numPages, book.read, book.id));
});
myLibrary.render();