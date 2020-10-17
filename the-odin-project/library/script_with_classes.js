// constants for DOM


class Book {
    constructor(title, author, numPages, read = false) {
        // if validateBook()
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }
}