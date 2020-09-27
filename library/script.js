let myLibrary = [];
const addBookButton = document.getElementById("add-book");

addBookButton.addEventListener('click', function() {
    console.log("clicked button!")
})

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

function appendToDocument(bookObj, index) {
    const bookContainer = document.getElementsByClassName("book-container")[0];

    //book root
    let bookElement = document.createElement("div");
    bookElement.classList = "card book col-sm-12 col-md-4 col-lg-4"

    //book img thumbnail
    let bookImg = document.createElement("img");
    bookImg.classList = "card-img-top thumbnail img-fluid";
    bookImg.src = "./assets/images/eloquent-javascript.jpg";
    bookElement.appendChild(bookImg);

    //book information
    let bookInfo = document.createElement("div");
    bookInfo.classList = "card-body";
        let bookTitleAndAuthor = document.createElement("h5");
            bookTitleAndAuthor.classList = "card-title"
            bookTitleAndAuthor.innerHTML = bookObj.title + ", " + "by " + bookObj.author
            bookInfo.appendChild(bookTitleAndAuthor);
        let bookPages = document.createElement("p");
            bookPages.classList = "pages";
            bookPages.innerHTML = bookObj.numPages + " Pages - ";
            bookInfo.appendChild(bookPages);
        let readStatus = document.createElement("div");
        if (bookObj.read == true) {
            readStatus.classList = "read";
            readStatus.innerHTML = "Read";
        } else {
            readStatus.classList = "unread";
            readStatus.innerHTML = "Unread"
        }
        bookInfo.appendChild(readStatus);
    bookElement.appendChild(bookInfo);
    bookContainer.appendChild(bookElement);
}


addBookToLibrary(new Book("Homeland", "R.A. Salvatore", "352", true));
addBookToLibrary(new Book("Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming", "Marijn Haverbeke", 472, false));
myLibrary.forEach(appendToDocument);