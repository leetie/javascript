let myLibrary = [];

function Book(title, author, numPages, read = false) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        return this.title + " " + "by" + " " + this.author + ", " + this.numPages + " pages, " + (this.read == false ? "not read yet." : "read")
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(new Book("Homeland", "R.A. Salvatore", "352", true));
addBookToLibrary(new Book("Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming", "Marijn Haverbeke", 472, false));

console.log(myLibrary)

function appendToDocument(bookObj, index) {
    const bookContainer = document.getElementsByClassName("book-container")[0];
    let element = document.createElement("div");
    element.classList = "book";
    element.innerHTML = "This is a book!";
    console.log(bookObj)
    console.log(index)
    // bookContainer.appendChild(element);
    // const books = bookContainer.getElementsByClassName("book");

    // let textnode = document.createTextNode(myLibrary[0].title);

    // bookContainer.appendChild(textnode);
}

// myLibrary.forEach(element => appendToDocument(element))
myLibrary.forEach(appendToDocument);