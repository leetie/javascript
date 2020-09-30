let myLibrary = [];
const bookContainer = document.getElementById("book-container");
const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener('click', function() {
    const authorName = document.getElementById("author");
    const title = document.getElementById("title");
    const numberOfPages = document.getElementById("pages");
    const read = document.getElementById("read").checked;

    if (validateBook(numberOfPages.value, authorName.value, title.value)) {
        $("#book-form").modal("toggle");
        //create book object and add to page
        const book = new Book(title.value, authorName.value, numberOfPages.value, read);
        bookContainer.style = "display: flex;"
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
    bookElement.appendChild(generateIcon(index));


    bookElement.classList = "card book col-sm-12 col-md-4 col-lg-4"
    //book img thumbnail
    let bookImg = document.createElement("img");
    bookImg.classList = "card-img-top thumbnail img-fluid";
    bookImg.src = "./assets/images/eloquent-javascript.jpg";
    let link = document.createElement("a");
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
        //add listener for toggling read status and changing read attribute in associated object
        readStatus.addEventListener("click", function() {
            let index = this.parentNode.parentNode.dataset.index;
            if (this.classList == "read") {
                this.classList = "unread";
                this.innerHTML = "Unread";
                myLibrary[index].read = false
            } else {
                this.classList = "read";
                this.innerHTML = "Read";
                myLibrary[index].read = true;
            }
        })
}

function generateIcon(index) {
    let iconElement = document.createElement("i");
    iconElement.classList = "fas fa-times-circle fa-3x remove-book";
    iconElement.style = "position: absolute; margin-left: 2em; margin-bottom: 1.5em; top: 0; right: 0;";
    iconElement.setAttribute("data-index", index)
    addListener(iconElement);
    return iconElement;
}

function addListener(element) {
    element.addEventListener("click", function() {
        let parent = element.parentNode
        let parentRoot = parent.parentNode
        element.parentNode.removeChild(element)
        parentRoot.removeChild(parent);
        checkEmpty();
        //keep books in library for now
        // myLibrary.splice(element.dataset.index, 1);
    })
}
// hide container and ugly empty element if there are no books
function checkEmpty() {
    if (bookContainer.childElementCount == 0) {
        bookContainer.style = "display: none;"
    }
}
checkEmpty();