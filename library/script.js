let myLibrary = [];
const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener('click', function() {
    const authorName = document.getElementById("author");
    const title = document.getElementById("title");
    const numberOfPages = document.getElementById("pages");
    const read = document.getElementById("read").checked;
    console.log(read);

    if (validateBook(numberOfPages.value, authorName.value, title.value)) {
        $("#book-form").modal("toggle");
        //create book object and add to page
        //new book objs index will be myLibrary.length - 1
        const book = new Book(title.value, authorName.value, numberOfPages.value, read);
        addBookToLibrary(book);
        appendToDocument(book, (myLibrary.length - 1));
        //clear form
        authorName.value = "";
        title.value = "";
        numberOfPages.value = "";
        document.getElementById("read").checked = false;
    } else {
        alert("Please complete form")
    }
})

function validateBook(pages, author, title) {
    if (
        (parseInt(pages) > 0) &&
        (author != "") && 
        (title != "")
    ) {
        return true
    } else { return false }
}

function Book(title, author, numPages, read = false) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.numPages + " pages, " + (this.read == false ? "not read yet." : "read")
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    return book;
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
    let link = document.createElement("a");
    console.log(bookObj.title.split(" "))
    //construct query string for search engine link
    let queryString = "q=";
    bookObj.title.split(" ").forEach(element => {
        queryString += element + "+";
    });
    console.log(queryString.slice(0, -1));
    link.href = `https://duckduckgo.com/?${queryString.slice(0, -1)}&t=newext&atb=v238-3&ia=web`;
    link.innerHTML = bookImg.outerHTML;
    link.target = "_blank"
    bookElement.appendChild(link);

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
    bookElement.setAttribute('data-index', index);
    bookContainer.appendChild(bookElement);
}

// addBookToLibrary(new Book("Homeland", "R.A. Salvatore", "352", true));
// addBookToLibrary(new Book("Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming", "Marijn Haverbeke", 472, false));
// addBookToLibrary(new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, true))
// myLibrary.forEach(appendToDocument);